// ==========================================
// QUIZ & EXAM APP LOGIC - MOBILE OPTIMIZED
// ==========================================

// Global State
const state = {
  currentExam: null,
  mode: "exam", // "exam" (Thi thử chuẩn) | "quiz" (Game Quiz tức thì)
  currentIndex: 0,
  userAnswers: {},       // { [questionId]: "A" | "B" | ... }
  skippedQuestions: {},  // { [questionId]: true } Questions explicitly skipped because the audio is missing
  flaggedQuestions: {},  // { [questionId]: boolean }
  quizFeedback: {},      // in quiz mode: { [questionId]: { answered: true, isCorrect: true } }
  timeRemaining: 0,      // in seconds
  timerInterval: null,
  isSubmitted: false,
  startTime: null,
  quizStreak: 0,
  maxStreak: 0,
  soundEnabled: true,
  history: [],
  reviewFilter: "all",   // "all" | "wrong" | "correct" | "unanswered"
  studentName: "Nguyễn Văn A",
  lanUrl: "http://192.168.1.20:3000",
  currentVoucherIndex: 0
};

// Fun Vouchers List for Gift Box
const FUN_VOUCHERS = [
  { title: "Phiếu Miễn Làm Việc Nhà 1 Ngày! 🧹", desc: "Được miễn rửa bát, quét nhà hoặc dọn phòng trọn vẹn 1 ngày không cần lí do!" },
  { title: "Phiếu Thưởng 1 Ly Trà Sữa Full Topping! 🧋", desc: "Được đòi phụ huynh hoặc người thân khao ngay 1 ly trà sữa trân châu siêu ngon!" },
  { title: "Phiếu Thêm 2 Tiếng Chơi Game Thỏa Thích! 🎮", desc: "Được cộng thêm 2 giờ chơi game hoặc xem YouTube giải trí cuối tuần!" },
  { title: "Phiếu Đi Ăn Pizza / Gà Rán Cuối Tuần! 🍕", desc: "Phiếu quyền lực được chọn món ăn yêu thích nhất cho cả nhà vào cuối tuần!" },
  { title: "Phiếu 1 Cây Kem Mát Lạnh Tự Chọn! 🍦", desc: "Được tự do chọn bất kỳ vị kem nào tại siêu thị hoặc cửa hàng tiện lợi!" },
  { title: "Phiếu Được Khen Ngợi Trước Cả Nhà! ⭐", desc: "Phụ huynh cam kết tuyên dương thành tích học tập trước gia đình và họ hàng!" }
];

// ==========================================
// 1. WEB AUDIO SYNTHESIS (Zero External Assets)
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, duration, type = 'sine', gainVal = 0.1, delay = 0) {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {
      // Audio might be blocked until user gesture
    }
  }

  correct() {
    // Pleasant major triad chime (C6, E6, G6)
    this.playTone(1046.5, 0.12, 'sine', 0.15, 0);
    this.playTone(1318.5, 0.15, 'sine', 0.15, 0.08);
    this.playTone(1567.98, 0.25, 'triangle', 0.2, 0.16);
  }

  wrong() {
    // Gentle low buzz
    this.playTone(220, 0.18, 'sawtooth', 0.12, 0);
    this.playTone(185, 0.25, 'sawtooth', 0.12, 0.12);
  }

  click() {
    this.playTone(800, 0.03, 'sine', 0.04, 0);
  }

  streak() {
    // Happy double ping
    this.playTone(587.33, 0.1, 'sine', 0.15, 0);
    this.playTone(739.99, 0.1, 'sine', 0.15, 0.07);
    this.playTone(880.00, 0.2, 'triangle', 0.2, 0.14);
  }

  reward() {
    [1046.5, 1567.98, 2093].forEach((freq, idx) => { this.playTone(freq, 0.28, idx === 2 ? 'triangle' : 'sine', 0.2, idx * 0.12); });
  }

  lowScore() {
    this.playTone(392, 0.14, 'sine', 0.12, 0);
    this.playTone(349.23, 0.2, 'sine', 0.12, 0.12);
  }

  finish() {
    // Victory fanfare
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 0.22, 'triangle', 0.18, idx * 0.1);
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// 2. CONFETTI ANIMATION (Pure Canvas)
// ==========================================
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#2563EB", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#FBBF24"];

  for (let i = 0; i < 140; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.75) * 20,
      size: Math.random() * 9 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      gravity: 0.38,
      opacity: 1
    });
  }

  let animationFrame;
  let startTime = Date.now();

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.opacity -= 0.008;

      if (p.opacity > 0 && p.y < canvas.height) {
        alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (alive > 0 && Date.now() - startTime < 3500) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}

// ==========================================
// 3. CELEBRATION TOASTS (Per Question)
// ==========================================
function showCelebrationToast(text, type = "success") {
  const container = document.getElementById("celebration-toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const bg = type === "error"
    ? "bg-rose-700 text-white border-rose-500"
    : type === "streak"
    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-300"
    : type === "success" 
    ? "bg-emerald-600 text-white border-emerald-400"
    : "bg-slate-800 text-white border-slate-700";

  toast.className = `floating-toast px-4 py-2 rounded-2xl shadow-xl font-extrabold text-sm border flex items-center gap-2 ${bg}`;
  toast.innerHTML = text;

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 1900);
}

// ==========================================
// 4. STORAGE & HISTORY
// ==========================================
function loadSavedData() {
  try {
    const raw = localStorage.getItem("quiz_app_history");
    state.history = raw ? JSON.parse(raw) : [];
    const name = localStorage.getItem("quiz_app_student_name");
    if (name) state.studentName = name;
  } catch (e) {
    state.history = [];
  }
}

function saveHistoryItem(record) {
  state.history.unshift(record);
  if (state.history.length > 50) state.history.pop();
  try {
    localStorage.setItem("quiz_app_history", JSON.stringify(state.history));
  } catch (e) {}
}

function clearHistory() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử làm bài?")) {
    state.history = [];
    localStorage.removeItem("quiz_app_history");
    renderHistoryModal();
  }
}

// ==========================================
// 5. EXAM LIFECYCLE
// ==========================================
function startExam(examId, mode = "exam", customQuestions = null) {
  document.body.classList.remove("dashboard-active");
  sfx.init();
  const examEntry = window.EXAMS_REGISTRY ? window.EXAMS_REGISTRY.find(e => e.id === examId) : null;
  if (!examEntry && !customQuestions) return;

  let baseData = customQuestions ? {
    id: "retry_custom_" + Date.now(),
    title: "LÀM LẠI CÁC CÂU SAI - " + (state.currentExam ? state.currentExam.shortTitle : "ÔN TẬP"),
    subject: state.currentExam ? state.currentExam.subject : "Tiếng Anh 8",
    durationMinutes: Math.max(10, Math.ceil(customQuestions.length * 1.5)),
    questions: customQuestions,
    totalQuestions: customQuestions.length
  } : examEntry.getData();

  if (!customQuestions && baseData) {
    const config = window.EXAM_REVIEW_CONFIG?.[baseData.id];
    if (config?.answerOverrides) {
      Object.entries(config.answerOverrides).forEach(([questionId, answer]) => {
        const question = baseData.questions.find(item => String(item.id) === String(questionId));
        if (question && question.options.some(option => option.key === answer)) question.correctAnswer = answer;
      });
    }
    const issues = validateExamData(baseData, examEntry);
    if (issues.length) {
      console.error(`[Kiểm tra đề: ${baseData.title}]`, issues);
      showCelebrationToast(`Đề có ${issues.length} lỗi dữ liệu cần rà soát.`, "error");
    }
  }

  state.currentExam = baseData;
  state.mode = mode;
  state.currentIndex = 0;
  state.userAnswers = {};
  state.skippedQuestions = {};
  state.flaggedQuestions = {};
  state.quizFeedback = {};
  state.isSubmitted = false;
  state.startTime = Date.now();
  state.timeRemaining = baseData.durationMinutes * 60;
  state.quizStreak = 0;
  state.maxStreak = 0;

  // View Switching
  document.getElementById("view-dashboard").classList.add("hidden");
  document.getElementById("view-result").classList.add("hidden");
  document.getElementById("view-exam").classList.remove("hidden");

  // Title in header
  document.getElementById("header-exam-title").textContent = baseData.title;
  
  // Mode badge
  const modeBadge = document.getElementById("header-mode-badge");
  if (mode === "quiz") {
    modeBadge.textContent = "Game Quiz";
    modeBadge.className = "hidden md:inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 text-amber-800 border border-amber-300";
    document.getElementById("quiz-streak-bar").classList.remove("hidden");
  } else {
    modeBadge.textContent = "Thi Thử";
    modeBadge.className = "hidden md:inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-700 border border-blue-200";
    document.getElementById("quiz-streak-bar").classList.add("hidden");
  }

  // Start timer
  startTimer();

  // Render question & sidebar
  renderCurrentQuestion();
  renderQuestionPalette();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      alert("Hết giờ làm bài! Hệ thống đang tự động nộp bài của bạn.");
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById("timer-display");
  if (!el) return;

  const mins = Math.floor(Math.max(0, state.timeRemaining) / 60);
  const secs = Math.max(0, state.timeRemaining) % 60;
  const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  el.textContent = formatted;

  // Warning when under 5 minutes
  const container = document.getElementById("timer-pill");
  if (state.timeRemaining <= 300) {
    container.classList.add("bg-red-50", "text-red-600", "border-red-200");
    container.classList.remove("bg-slate-50", "text-slate-700");
  } else {
    container.classList.remove("bg-red-50", "text-red-600", "border-red-200");
    container.classList.add("bg-slate-50", "text-slate-700");
  }
}

// ==========================================
// 6. QUESTION RENDERING (Streamlined & Minimalist)
// ==========================================
function getQuestionPartLabel(part = "") {
  const value = part.toLocaleLowerCase("vi");
  if (/listening|kỹ năng nghe/.test(value)) return "Nghe";
  if (/tự luận/.test(value)) return "Tự luận";
  if (/trả lời ngắn/.test(value)) return "Trả lời ngắn";
  if (/phần\s*\d+/.test(value)) return value.match(/phần\s*\d+/)[0].replace(/\s+/g, " ").replace(/^./, c => c.toUpperCase());
  if (/pronunciation|phonetics|phát âm/.test(value)) return "Phát âm";
  if (/stress|trọng âm/.test(value)) return "Trọng âm";
  if (/reading|đọc hiểu|đọc điền|cloze|gap fill|advertisement|leaflet|announcement/.test(value)) return "Đọc hiểu";
  if (/sign|biển báo|notice/.test(value)) return "Biển báo";
  if (/writing|viết|sentence/.test(value)) return "Viết";
  if (/grammar|vocabulary|ngữ pháp|từ vựng/.test(value)) return "Ngữ pháp · Từ vựng";
  if (/dictionary|tra từ điển/.test(value)) return "Tra từ điển";
  if (/multiple choice|trắc nghiệm/.test(value)) return "Trắc nghiệm";
  return "Câu hỏi";
}

function shouldShowQuestionInstruction(q) {
  const instruction = (q.instruction || "").trim();
  if (!instruction) return false;
  const config = window.EXAM_REVIEW_CONFIG?.[state.currentExam?.id];
  if (config?.forceShowInstructionIds?.some(id => String(id) === String(q.id))) return true;
  if (instruction.toLowerCase() === (q.question || "").trim().toLowerCase()) return false;

  // English directions are usually repeated; the passage and question stem already
  // tell students what to do. Keep only question-specific source data here.
  const genericDirection = /^(hãy chọn|em chọn|chọn phương án|choose|mark the letter|listen to|read the passage|read the text|complete|find the word|find the mistake|give the correct|rewrite|arrange|work out|select|indicate|decide|use the|fill in|four phrases|circle|underline)\b/i;
  if (genericDirection.test(instruction)) return false;

  // Keep question-specific math givens visible, including formula data.
  return /\$|\\\(|\\frac|\\sqrt|[A-Za-z]\s*=|\b(?:cho|với|biết rằng|given that|suppose)\b/i.test(instruction);
}

function validateExamData(exam, catalogEntry) {
  const issues = [];
  const questions = Array.isArray(exam.questions) ? exam.questions : [];
  if (!questions.length) issues.push("Không có câu hỏi.");
  if (catalogEntry?.questionsCount !== questions.length) {
    issues.push(`Danh mục ghi ${catalogEntry?.questionsCount ?? "?"} câu, dữ liệu có ${questions.length} câu.`);
  }

  const seenIds = new Set();
  questions.forEach((question, index) => {
    const label = `Câu ${index + 1} (ID ${question.id ?? "?"})`;
    if (question.id == null || seenIds.has(String(question.id))) issues.push(`${label}: thiếu hoặc trùng ID.`);
    seenIds.add(String(question.id));
    if (!question.question?.trim()) issues.push(`${label}: thiếu nội dung.`);
    if (!Array.isArray(question.options) || question.options.length < 2) {
      issues.push(`${label}: thiếu lựa chọn.`);
    } else {
      const keys = question.options.map(option => option.key);
      if (new Set(keys).size !== keys.length) issues.push(`${label}: trùng ký hiệu lựa chọn.`);
      if (!keys.includes(question.correctAnswer)) issues.push(`${label}: đáp án ${question.correctAnswer ?? "trống"} không có trong lựa chọn.`);
    }
  });
  return issues;
}

function questionNeedsAudioSkip(q) {
  const config = window.EXAM_REVIEW_CONFIG?.[state.currentExam?.id];
  return !!config?.audioUnavailable && /listening|kỹ năng nghe/i.test(q.part || "");
}

function getQuestionBlankNumbers(q) {
  const source = `${q.question || ""} ${q.instruction || ""}`;
  const matches = [...source.matchAll(/blank\s*\(?\s*(\d+)\s*\)?|chỗ trống\s*\(?\s*(\d+)\s*\)?/ig)];
  return [...new Set(matches.map(match => match[1] || match[2]))];
}

function getPassageBlankNumbers(context = "") {
  return [...new Set([...context.matchAll(/\((\d+)\)\s*_{2,}/g)].map(match => match[1]))];
}

function getActiveBlankNumbers(question) {
  const questionNumbers = getQuestionBlankNumbers(question);
  return questionNumbers.length ? questionNumbers : getPassageBlankNumbers(question.context || "");
}

function buildResolvedContext(context, question, revealAnswers = false) {
  if (!revealAnswers) return context || "";
  if (!context) return "";
  let html = context;
  const blankNumbers = getPassageBlankNumbers(context);
  const activeBlankNumbers = getActiveBlankNumbers(question);
  blankNumbers.forEach(blankNumber => {
    if (!activeBlankNumbers.includes(blankNumber)) return;
    const option = question.options?.find(item => item.key === question.correctAnswer);
    if (!option) return;
    const answerForBlank = option.text
      .split(/\s*[-–—]\s*/)
      .find(part => new RegExp(`\\|\\s*${blankNumber}\\s*\\|`).test(part));
    const answerText = answerForBlank
      ? answerForBlank.replace(new RegExp(`^.*?\\|\\s*${blankNumber}\\s*\\|\\s*`), "").trim()
      : (activeBlankNumbers.length === 1 ? option.text : null);
    if (!answerText) return;
    const escapedAnswer = answerText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const blankPattern = new RegExp(`\\(\\s*${blankNumber}\\s*\\)\\s*_{2,}`, "g");
    html = html.replace(blankPattern, `<mark class="resolved-blank">(${blankNumber}) ${escapedAnswer}</mark>`);
  });
  return html;
}

function getMappedOptionText(optionText, question, revealAnswers = false) {
  if (!revealAnswers) return optionText;
  if (!/\|\s*\d+\s*\|/.test(optionText)) {
    const blankNumbers = getActiveBlankNumbers(question);
    return blankNumbers.length === 1 ? `(${blankNumbers[0]}) ${optionText}` : optionText;
  }
  return optionText.split(/\s*[–—-]\s*/).map(part => {
    const match = part.match(/\|\s*(\d+)\s*\|\s*(.*)/);
    return match ? `(${match[1]}) ${match[2]}` : part.trim();
  }).join("  →  ");
}

function getFullPassageContext(question) {
  const siblings = state.currentExam?.questions?.filter(item => item.part === question.part && item.context) || [];
  return siblings.sort((a, b) => getPassageBlankNumbers(b.context).length - getPassageBlankNumbers(a.context).length || b.context.length - a.context.length)[0]?.context || question.context || "";
}

function buildAnsweredContext(context, question) {
  if (!context) return "";
  const active = getActiveBlankNumbers(question);
  const selected = question.options?.find(option => option.key === state.userAnswers[question.id]);
  let html = context;
  active.forEach(number => {
    const answerPart = selected?.text.split(/\s*[-–—]\s*/).find(part => new RegExp(`\\|\\s*${number}\\s*\\|`).test(part));
    const answer = answerPart
      ? answerPart.replace(new RegExp(`^.*?\\|\\s*${number}\\s*\\|\\s*`), "").trim()
      : (active.length === 1 ? selected?.text : null);
    const pattern = new RegExp(`\\(\\s*${number}\\s*\\)\\s*_{2,}`);
    html = html.replace(pattern, answer
      ? `<mark class="answered-blank">(${number}) ${answer}</mark>`
      : `<mark class="answered-blank">(${number}) ________</mark>`);
  });
  return html;
}

function getArrangementSolution(question) {
  const answer = question.options?.find(option => option.key === question.correctAnswer)?.text || "";
  return /arrange|logical (?:dialogue|letter|paragraph) order|correct sequence/i.test(`${question.question || ""} ${question.instruction || ""}`)
    ? answer.replace(/\s*[–—-]\s*/g, " → ")
    : "";
}

function renderCurrentQuestion() {
  const q = state.currentExam.questions[state.currentIndex];
  if (!q) return;

  const total = state.currentExam.questions.length;

  // Progress Bar
  const progressPercent = ((state.currentIndex + 1) / total) * 100;
  const progBar = document.getElementById("exam-progress-bar");
  if (progBar) progBar.style.width = `${progressPercent}%`;

  // Question Counter: "Câu hỏi X / N"
  const counterEl = document.getElementById("question-counter");
  counterEl.innerHTML = `Câu hỏi ${state.currentIndex + 1} <span class="text-slate-400 font-normal text-sm">/ ${total}</span>`;

  // Mobile Bottom Bar Label
  const mobileLabel = document.getElementById("mobile-drawer-label");
  if (mobileLabel) mobileLabel.textContent = `Câu ${state.currentIndex + 1}/${total}`;

  // Streamlined category tag (Less text clutter!)
  const tagEl = document.getElementById("question-part-tag");
  tagEl.textContent = getQuestionPartLabel(q.part);

  const instructionBox = document.getElementById("question-instruction-box");
  if (instructionBox) {
    if (shouldShowQuestionInstruction(q)) {
      instructionBox.classList.remove("hidden");
      instructionBox.innerHTML = formatMathText(q.instruction);
    } else {
      instructionBox.classList.add("hidden");
      instructionBox.innerHTML = "";
    }
  }

  // Mark listening questions that have no source audio and allow students to skip them.
  const audioNoticeId = "listening-audio-notice";
  let audioNotice = document.getElementById(audioNoticeId);
  const needsAudioSkip = questionNeedsAudioSkip(q);
  if (needsAudioSkip && !audioNotice) {
    audioNotice = document.createElement("div");
    audioNotice.id = audioNoticeId;
    audioNotice.className = "audio-skip-notice mb-4 rounded-2xl border-2 border-rose-400 bg-rose-50 p-4 text-base leading-relaxed text-rose-950";
    document.getElementById("question-instruction-box").after(audioNotice);
  }
  if (audioNotice) {
    audioNotice.classList.toggle("hidden", !needsAudioSkip);
    if (needsAudioSkip) {
      audioNotice.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div><strong class="block text-lg">Phần nghe · Có thể bỏ qua</strong><span>Đề hiện chưa có tệp âm thanh. Câu này sẽ không tính điểm nếu em bỏ qua.</span></div>
          <button id="btn-skip-audio-question" class="min-h-12 rounded-xl bg-rose-600 px-5 py-3 text-base font-extrabold text-white hover:bg-rose-700">Bỏ qua câu nghe</button>
        </div>`;
      document.getElementById("btn-skip-audio-question").addEventListener("click", skipCurrentAudioQuestion);
    }
  }

  // Reading Passage / Context Box (Compact)
  const contextBox = document.getElementById("question-context-box");
  const contextContent = document.getElementById("question-context-content");
  const fullPassageContext = getFullPassageContext(q);
  if (fullPassageContext) {
    contextBox.classList.remove("hidden");
    contextContent.innerHTML = `
      <div class="text-base sm:text-lg text-slate-800 leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-slate-200 font-medium max-h-72 overflow-y-auto">
        ${buildAnsweredContext(buildResolvedContext(fullPassageContext, q, state.isSubmitted), q)}
      </div>
    `;
  } else {
    contextBox.classList.add("hidden");
  }

  // Question Stem Text
  const textEl = document.getElementById("question-text");
  const passageBlankNumbers = getPassageBlankNumbers(q.context || "");
  const isMultiBlankSequence = passageBlankNumbers.length > 1 && !getQuestionBlankNumbers(q).length;
  textEl.innerHTML = formatMathText(isMultiBlankSequence
    ? `Chọn cách điền cho các chỗ trống ${passageBlankNumbers.map(number => `(${number})`).join(", ")}:`
    : q.question);

  // Options rendering
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  const selectedKey = state.userAnswers[q.id];
  const isQuizMode = state.mode === "quiz";
  const feedback = state.quizFeedback[q.id];

  q.options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "option-card rounded-xl p-3.5 sm:p-4 flex items-center gap-3 border text-sm sm:text-base";
    card.dataset.key = opt.key;

    let radioCircleClasses = "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all font-bold text-xs";
    let isOptSelected = selectedKey === opt.key;

    if (isQuizMode && feedback && feedback.answered) {
      if (opt.key === q.correctAnswer) {
        card.classList.add("correct");
        radioCircleClasses += " border-emerald-500 bg-emerald-500 text-white";
      } else if (isOptSelected && opt.key !== q.correctAnswer) {
        card.classList.add("wrong");
        radioCircleClasses += " border-red-500 bg-red-500 text-white";
      } else {
        radioCircleClasses += " border-slate-300 text-slate-400";
      }
    } else {
      if (isOptSelected) {
        card.classList.add("selected");
        radioCircleClasses += " border-blue-600 bg-blue-600 text-white shadow-xs";
      } else {
        radioCircleClasses += " border-slate-300 text-slate-500 bg-slate-50";
      }
    }

    card.innerHTML = `
      <div class="${radioCircleClasses}">
        ${isOptSelected || (isQuizMode && feedback && opt.key === q.correctAnswer) ? `
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        ` : opt.key}
      </div>
      <div class="flex-1 font-semibold text-slate-800">
        <span>${formatMathText(getMappedOptionText(opt.text, q, state.isSubmitted))}</span>
      </div>
    `;

    card.addEventListener("click", () => handleOptionClick(opt.key));
    optionsContainer.appendChild(card);
  });

  const answerHint = document.getElementById("question-answer-hint");
  const correctOption = q.options.find(option => option.key === q.correctAnswer);
  const feedbackAnswer = document.getElementById("quiz-feedback-answer");
  if (feedbackAnswer) feedbackAnswer.innerHTML = `Đáp án đúng: ${correctOption?.key || q.correctAnswer} · ${formatMathText(getMappedOptionText(correctOption?.text || "", q))}`;
  if (answerHint) {
    answerHint.innerHTML = "";
    answerHint.classList.add("hidden");
    if (state.isSubmitted) {
    const blankNumbers = getActiveBlankNumbers(q);
    const sequence = getArrangementSolution(q);
    if (blankNumbers.length === 1) {
      const blankNumber = blankNumbers[0];
      answerHint.innerHTML = `<span class="hint-number">(${blankNumber})</span><span>Chỗ trống ${blankNumber}: <b>${correctOption?.key || ""} · ${formatMathText(correctOption?.text || "")}</b></span>`;
      answerHint.classList.remove("hidden");
    } else if (blankNumbers.length > 1) {
      answerHint.innerHTML = `<span>Đáp án đúng · ${correctOption?.key || ""}</span><b>${formatMathText(getMappedOptionText(correctOption?.text || "", q))}</b>`;
      answerHint.classList.remove("hidden");
    } else if (sequence) {
      answerHint.innerHTML = `<span>Thứ tự đúng</span><b>${sequence}</b>`;
      answerHint.classList.remove("hidden");
    } else {
      answerHint.innerHTML = "";
      answerHint.classList.add("hidden");
    }
    }
  }

  // Quiz Mode Immediate Feedback Banner
  const quizFeedbackBox = document.getElementById("quiz-feedback-box");
  if (isQuizMode && feedback && feedback.answered) {
    quizFeedbackBox.classList.remove("hidden");
    const isCorrect = feedback.isCorrect;
    quizFeedbackBox.className = `p-4 rounded-xl border mt-4 transition-all ${
      isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-rose-50 border-rose-200 text-rose-900"
    }`;
    quizFeedbackBox.innerHTML = `
      <div class="flex items-center gap-2 font-black mb-1">
        ${isCorrect ? `
          <span class="text-emerald-700 text-base">🎉 Quá chính xác!</span>
          <span class="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-bold">+10 XP</span>
        ` : `
          <span class="text-rose-700 text-base">❌ Chưa đúng rồi!</span>
          <span id="quiz-feedback-answer" class="text-xs text-rose-800 font-bold">Đáp án là: <b>${q.correctAnswer}</b></span>
        `}
      </div>
      <div class="text-xs sm:text-sm mt-2 text-slate-700 bg-white/90 p-3 rounded-lg border border-slate-200 leading-relaxed">
        <b class="text-slate-900 block mb-0.5">💡 Lời giải chi tiết:</b>
        <div class="whitespace-pre-line">${formatMathText(q.explanation)}</div>
      </div>
    `;
  } else {
    quizFeedbackBox.classList.add("hidden");
  }

  // Update Flag button state
  const flagBtn = document.getElementById("btn-flag");
  const isFlagged = !!state.flaggedQuestions[q.id];
  if (isFlagged) {
    flagBtn.classList.add("bg-amber-100", "text-amber-800", "border-amber-300");
    flagBtn.classList.remove("bg-white", "text-slate-600", "border-slate-200");
    flagBtn.innerHTML = `
      <svg class="w-4 h-4 fill-amber-500 text-amber-500" viewBox="0 0 24 24"><path d="M4 2v20M4 4h12l-2 5 2 5H4"/></svg>
      <span>Đã dấu</span>
    `;
  } else {
    flagBtn.classList.remove("bg-amber-100", "text-amber-800", "border-amber-300");
    flagBtn.classList.add("bg-white", "text-slate-600", "border-slate-200");
    flagBtn.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
      <span>Đánh dấu</span>
    `;
  }

  // Update Prev/Next buttons
  const isFirst = state.currentIndex === 0;
  const isLast = state.currentIndex === total - 1;

  document.getElementById("btn-prev").disabled = isFirst;
  const mobilePrev = document.getElementById("mobile-btn-prev");
  if (mobilePrev) mobilePrev.disabled = isFirst;

  const nextBtn = document.getElementById("btn-next");
  const mobileNext = document.getElementById("mobile-btn-next");

  if (isLast) {
    nextBtn.innerHTML = `Hoàn thành <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
    if (mobileNext) mobileNext.innerHTML = `Nộp <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
  } else {
    nextBtn.innerHTML = `Câu tiếp <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
    if (mobileNext) mobileNext.innerHTML = `Tiếp <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
  }

  // Render Math KaTeX
  renderAllMathInElement();
}

// ==========================================
// 7. OPTION CLICK & CELEBRATION DISPATCH
// ==========================================
function handleOptionClick(key) {
  const q = state.currentExam.questions[state.currentIndex];
  if (!q) return;

  delete state.skippedQuestions[q.id];
  state.userAnswers[q.id] = key;

  if (state.mode === "quiz") {
    const isCorrect = key === q.correctAnswer;
    state.quizFeedback[q.id] = { answered: true, isCorrect };

    if (isCorrect) {
      state.quizStreak++;
      if (state.quizStreak > state.maxStreak) state.maxStreak = state.quizStreak;
      sfx.correct();

      // Celebration Toasts based on streak
      if (state.quizStreak === 1) {
        showCelebrationToast("✨ Tuyệt vời! Chính xác! 🎯", "success");
      } else if (state.quizStreak === 3) {
        sfx.streak();
        showCelebrationToast("🔥 COMBO x3! Phong độ xuất sắc! ⚡", "streak");
      } else if (state.quizStreak === 5) {
        sfx.streak();
        showCelebrationToast("🌟 SIÊU CAO THỦ! Chuỗi 5 câu đúng! 👑", "streak");
      } else if (state.quizStreak >= 10) {
        sfx.streak();
        showCelebrationToast(`🚀 KHÔNG THỂ CẢN PHÁ! Chuỗi ${state.quizStreak}! 🔥`, "streak");
      } else {
        showCelebrationToast(`🎉 Đúng rồi! Chuỗi x${state.quizStreak} 🔥`, "success");
      }

    } else {
      state.quizStreak = 0;
      sfx.wrong();
      showCelebrationToast("😅 Tiếc quá! Xem lời giải bên dưới nhé!", "info");
    }
    updateStreakDisplay();
  } else {
    // Exam mode click feedback
    sfx.click();
    showCelebrationToast(`✓ Đã chọn đáp án <b>${key}</b>`, "info");
  }

  renderCurrentQuestion();
  renderQuestionPalette();
}

function clearCurrentAnswer() {
  const q = state.currentExam.questions[state.currentIndex];
  if (!q) return;
  delete state.userAnswers[q.id];
  delete state.quizFeedback[q.id];
  renderCurrentQuestion();
  renderQuestionPalette();
}

function skipCurrentAudioQuestion() {
  const q = state.currentExam?.questions[state.currentIndex];
  if (!q || !questionNeedsAudioSkip(q)) return;
  state.skippedQuestions[q.id] = true;
  delete state.userAnswers[q.id];
  delete state.quizFeedback[q.id];
  renderQuestionPalette();
  if (state.currentIndex < state.currentExam.questions.length - 1) {
    state.currentIndex++;
    renderCurrentQuestion();
    renderQuestionPalette();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    openSubmitConfirmModal();
  }
}

function toggleFlagCurrentQuestion() {
  const q = state.currentExam.questions[state.currentIndex];
  if (!q) return;
  state.flaggedQuestions[q.id] = !state.flaggedQuestions[q.id];
  renderCurrentQuestion();
  renderQuestionPalette();
}

function updateStreakDisplay() {
  const streakCount = document.getElementById("streak-count");
  if (streakCount) streakCount.textContent = state.quizStreak;
}

// ==========================================
// 8. QUESTION MATRIX & MOBILE DRAWER
// ==========================================
function renderQuestionPalette() {
  const desktopGrid = document.getElementById("question-palette-grid");
  const mobileGrid = document.getElementById("mobile-question-palette-grid");
  if (!state.currentExam) return;

  const total = state.currentExam.questions.length;
  let answeredCount = 0;
  let flaggedCount = 0;

  if (desktopGrid) desktopGrid.innerHTML = "";
  if (mobileGrid) mobileGrid.innerHTML = "";

  state.currentExam.questions.forEach((q, idx) => {
    const isAnswered = state.userAnswers[q.id] !== undefined;
    const isCurrent = idx === state.currentIndex;
    const isFlagged = !!state.flaggedQuestions[q.id];
    const isSkipped = !!state.skippedQuestions[q.id];

    if (isAnswered) answeredCount++;
    if (isFlagged) flaggedCount++;

    const makeBtn = () => {
      const btn = document.createElement("button");
      btn.className = "q-btn";
      btn.textContent = idx + 1;

      if (isSkipped) btn.classList.add("skipped");
      else if (isAnswered) btn.classList.add("answered");
      else btn.classList.add("unanswered");

      if (isCurrent) btn.classList.add("current");
      if (isFlagged) btn.classList.add("flagged");

      btn.addEventListener("click", () => {
        sfx.click();
        state.currentIndex = idx;
        renderCurrentQuestion();
        renderQuestionPalette();
        closeMobileDrawer();
      });
      return btn;
    };

    if (desktopGrid) desktopGrid.appendChild(makeBtn());
    if (mobileGrid) mobileGrid.appendChild(makeBtn());
  });

  // Update stats counters
  const skippedCount = Object.values(state.skippedQuestions).filter(Boolean).length;
  const unansweredCount = total - answeredCount - skippedCount;
  const aEl = document.getElementById("stat-answered-count");
  const uEl = document.getElementById("stat-unanswered-count");
  const fEl = document.getElementById("stat-flagged-count");

  if (aEl) aEl.textContent = answeredCount;
  if (uEl) uEl.textContent = unansweredCount;
  if (fEl) fEl.textContent = flaggedCount;
}

function openMobileDrawer() {
  sfx.click();
  document.getElementById("mobile-drawer-backdrop").classList.remove("hidden");
}

function closeMobileDrawer() {
  document.getElementById("mobile-drawer-backdrop").classList.add("hidden");
}

function goToPrevQuestion() {
  if (state.currentIndex > 0) {
    sfx.click();
    state.currentIndex--;
    renderCurrentQuestion();
    renderQuestionPalette();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goToNextQuestion() {
  if (state.currentIndex < state.currentExam.questions.length - 1) {
    sfx.click();
    state.currentIndex++;
    renderCurrentQuestion();
    renderQuestionPalette();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    openSubmitConfirmModal();
  }
}

// ==========================================
// 9. SUBMISSION & RESULTS
// ==========================================
function openSubmitConfirmModal() {
  sfx.click();
  const skippedCount = Object.values(state.skippedQuestions).filter(Boolean).length;
  const total = state.currentExam.questions.length - skippedCount;
  let answered = 0;
  state.currentExam.questions.forEach(q => {
    if (!state.skippedQuestions[q.id] && state.userAnswers[q.id] !== undefined) answered++;
  });
  const unanswered = total - answered;

  document.getElementById("modal-total-q").textContent = total;
  document.getElementById("modal-answered-q").textContent = answered;
  document.getElementById("modal-unanswered-q").textContent = unanswered;

  const warning = document.getElementById("modal-submit-warning");
  if (unanswered > 0) {
    warning.textContent = `${unanswered} câu chưa làm${skippedCount ? ` · ${skippedCount} câu nghe được bỏ qua, không tính điểm` : ""}.`;
    warning.classList.remove("hidden");
  } else if (skippedCount > 0) {
    warning.textContent = `${skippedCount} câu nghe được bỏ qua, không tính điểm.`;
    warning.classList.remove("hidden");
  } else {
    warning.classList.add("hidden");
  }

  document.getElementById("modal-confirm-submit").classList.remove("hidden");
}

function closeSubmitConfirmModal() {
  document.getElementById("modal-confirm-submit").classList.add("hidden");
}

function submitExam() {
  closeSubmitConfirmModal();
  clearInterval(state.timerInterval);
  state.isSubmitted = true;

  let skippedCount = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  state.currentExam.questions.forEach(q => {
    if (state.skippedQuestions[q.id]) {
      skippedCount++;
      return;
    }
    const userAns = state.userAnswers[q.id];
    if (userAns === undefined) {
      unansweredCount++;
    } else if (userAns === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const total = state.currentExam.questions.length - skippedCount;
  const rawScore = total > 0 ? (correctCount / total) * 10 : 0;
  const finalScore = Math.round(rawScore * 10) / 10;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const timeSpentSec = (state.currentExam.durationMinutes * 60) - Math.max(0, state.timeRemaining);
  const timeFormatted = `${Math.floor(timeSpentSec / 60)}p ${timeSpentSec % 60}s`;

  // Save Record
  const historyItem = {
    id: "attempt_" + Date.now(),
    examId: state.currentExam.id,
    examTitle: state.currentExam.title,
    subject: state.currentExam.subject,
    date: new Date().toLocaleDateString("vi-VN"),
    score: finalScore,
    percentage: percentage,
    correctCount: correctCount,
    totalCount: total,
    skippedCount,
    timeSpent: timeFormatted,
    userAnswers: { ...state.userAnswers },
    mode: state.mode
  };
  saveHistoryItem(historyItem);

  // Render first so feedback and celebration play on the result screen.
  renderResultScreen(historyItem);
  const feedback = getScoreFeedback(finalScore);
  showScoreCelebration(finalScore, feedback);
  if (finalScore >= 8) {
    sfx.reward();
    [250, 950, 1650].forEach(delay => setTimeout(launchConfetti, delay));
  } else if (finalScore >= 6) {
    sfx.correct();
  } else {
    sfx.lowScore();
  }
  showCelebrationToast(feedback.message, feedback.type);
  if (finalScore >= 9) setTimeout(launchConfetti, 2400);
}

function showScoreCelebration(score, feedback) {
  const overlay = document.getElementById("score-celebration");
  const icon = document.getElementById("score-celebration-icon");
  const message = document.getElementById("score-celebration-message");
  const detail = document.getElementById("score-celebration-detail");
  if (!overlay || !icon || !message || !detail) return;
  icon.textContent = feedback.icon || (score >= 8 ? "🎁" : score >= 6 ? "👍" : "📚");
  message.textContent = feedback.message;
  detail.textContent = feedback.detail || `Bạn đạt ${score.toFixed(1)} trên 10 điểm.`;
  overlay.classList.remove("hidden");
}

function closeScoreCelebration() {
  document.getElementById("score-celebration")?.classList.add("hidden");
}

function getScoreFeedback(score) {
  if (score >= 9) return { message: "🏆 Xuất sắc! Thành tích quá đỉnh — mở quà thôi!", detail: "Hộp quà đặc biệt đang chờ bạn mở.", icon: "🏆", type: "streak" };
  if (score >= 8) return { message: "🎉 Giỏi lắm! Ting tong — bạn nhận được hộp quà!", detail: "Bạn đã mở khóa quà bí ẩn và giấy khen danh dự.", icon: "🎁", type: "success" };
  if (score >= 6) return { message: "👍 Tạm ổn! Ôn thêm một chút là lên điểm ngay.", detail: "Xem lại các câu sai để tiến gần mốc 8 điểm và mở quà.", icon: "💪", type: "info" };
  if (score >= 5) return { message: "💪 Cố gắng thêm nhé — xem lại câu sai rồi thử lại!", detail: "Bạn đang tiến bộ. Mỗi lần luyện sẽ giúp nhớ bài tốt hơn.", icon: "📚", type: "info" };
  return { message: "📚 Chưa đạt mục tiêu lần này. Bình tĩnh xem lời giải, luyện thêm rồi thử lại nhé!", detail: "Không sao cả — hãy bắt đầu từ những câu mình chưa chắc nhé.", icon: "🌱", type: "info" };
}

function renderResultScreen(item) {
  document.getElementById("view-exam").classList.add("hidden");
  document.getElementById("view-dashboard").classList.add("hidden");
  document.getElementById("view-result").classList.remove("hidden");

  document.getElementById("result-exam-title").textContent = item.examTitle;
  document.getElementById("result-score-val").textContent = item.score.toFixed(1);
  document.getElementById("result-percentage").textContent = `${item.percentage}%`;
  document.getElementById("result-correct-count").textContent = `${item.correctCount} / ${item.totalCount}`;
  const skippedNote = document.getElementById("result-skipped-note");
  if (skippedNote) {
    skippedNote.textContent = item.skippedCount ? `Đã bỏ qua ${item.skippedCount} câu nghe thiếu audio · không tính điểm` : "";
    skippedNote.classList.toggle("hidden", !item.skippedCount);
  }
  document.getElementById("result-time-spent").textContent = item.timeSpent;

  // Score feedback and rank follow the requested score bands.
  const rankEl = document.getElementById("result-rank-badge");
  const feedback = getScoreFeedback(item.score);
  rankEl.textContent = feedback.message;
  rankEl.className = item.score >= 8
    ? "px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-amber-100 text-amber-800 border border-amber-300"
    : item.score >= 6
    ? "px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-blue-100 text-blue-800 border border-blue-300"
    : item.score >= 5
    ? "px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-orange-100 text-orange-800 border border-orange-300"
    : "px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-rose-100 text-rose-800 border border-rose-300";

  const giftBanner = document.getElementById("reward-gift-banner");
  const eligible = item.score >= 8;
  giftBanner.classList.toggle("hidden", !eligible);
  if (eligible) {
    giftBanner.querySelector("h4").textContent = item.score >= 9 ? "HỘP QUÀ XUẤT SẮC ĐANG CHỜ BẠN!" : "MỞ HỘP QUÀ MAY MẮN!";
    giftBanner.querySelector("p").textContent = "Mốc 8 điểm trở lên: mở hộp quà, nghe ting tong và nhận giấy khen danh dự.";
    giftBanner.querySelector("button span").textContent = "🎉 MỞ QUÀ NGAY";
    giftBanner.querySelector(".gift-box-animate").setAttribute("role", "button");
    giftBanner.querySelector(".gift-box-animate").setAttribute("tabindex", "0");
    giftBanner.querySelector(".gift-box-animate").setAttribute("aria-label", "Mở hộp quà");
  }

  // Populate Certificate Data
  document.getElementById("cert-student-name").value = state.studentName;
  document.getElementById("cert-display-name").textContent = state.studentName;
  document.getElementById("cert-exam-title").textContent = item.examTitle;
  document.getElementById("cert-display-score").textContent = `${item.score.toFixed(1)} / 10 Điểm (${item.percentage}%)`;
  document.getElementById("cert-code").textContent = `EXAM-${Math.floor(1000 + Math.random() * 9000)}`;
  
  const now = new Date();
  document.getElementById("cert-date").textContent = `Ngày ${now.getDate()} tháng ${now.getMonth() + 1} năm ${now.getFullYear()}`;

  // Retry missed questions button
  const retryWrongBtn = document.getElementById("btn-retry-wrong");
  const missedCount = item.totalCount - item.correctCount;
  if (missedCount > 0) {
    retryWrongBtn.classList.remove("hidden");
    retryWrongBtn.textContent = `Làm lại ${missedCount} câu sai 🔄`;
  } else {
    retryWrongBtn.classList.add("hidden");
  }

  // Render Detailed Review
  renderDetailedReview();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 10. REWARD GIFT BOX & CERTIFICATE LOGIC
// ==========================================
function openGiftBoxModal() {
  sfx.reward();
  [0, 600, 1200].forEach(delay => setTimeout(launchConfetti, delay));
  rerollVoucher();
  document.getElementById("modal-gift-reward").classList.remove("hidden");
}

function closeGiftBoxModal() {
  document.getElementById("modal-gift-reward").classList.add("hidden");
}

function updateCertificateName() {
  const input = document.getElementById("cert-student-name");
  if (!input) return;
  const val = input.value.trim() || "Nguyễn Văn A";
  state.studentName = val;
  try {
    localStorage.setItem("quiz_app_student_name", val);
  } catch (e) {}

  document.getElementById("cert-display-name").textContent = val;
  sfx.click();
  showCelebrationToast("✓ Đã cập nhật tên trên Giấy Khen!", "success");
}

function rerollVoucher() {
  state.currentVoucherIndex = (state.currentVoucherIndex + 1) % FUN_VOUCHERS.length;
  const v = FUN_VOUCHERS[state.currentVoucherIndex];
  const titleEl = document.getElementById("voucher-title");
  if (titleEl) {
    titleEl.textContent = v.title;
    titleEl.parentElement.querySelector("p").textContent = v.desc;
  }
}

// ==========================================
// 11. MOBILE SHARING & QR CODE LOGIC
// ==========================================
function openShareModal() {
  sfx.click();
  // Auto-detect current host or LAN IP
  let shareUrl = state.lanUrl;
  if (window.location.protocol.startsWith("http")) {
    shareUrl = window.location.origin;
  }

  // Fetch from server /api/lan-info if available
  fetch("/api/lan-info")
    .then(r => r.json())
    .then(data => {
      if (data && data.url) {
        state.lanUrl = data.url;
        updateShareModalUI(data.url);
      } else {
        updateShareModalUI(shareUrl);
      }
    })
    .catch(() => {
      updateShareModalUI(shareUrl);
    });

  updateShareModalUI(shareUrl);
  document.getElementById("modal-share").classList.remove("hidden");
}

function updateShareModalUI(url) {
  const input = document.getElementById("share-link-input");
  const img = document.getElementById("share-qr-img");
  if (input) input.value = url;
  if (img) {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(url)}`;
  }
}

function closeShareModal() {
  document.getElementById("modal-share").classList.add("hidden");
}

function copyShareLink() {
  const input = document.getElementById("share-link-input");
  if (!input) return;
  input.select();
  navigator.clipboard.writeText(input.value)
    .then(() => {
      sfx.click();
      showCelebrationToast("📋 Đã sao chép link vào clipboard!", "success");
    })
    .catch(() => {
      document.execCommand("copy");
      showCelebrationToast("📋 Đã sao chép link!", "success");
    });
}

// ==========================================
// 12. DETAILED EXPLANATIONS & REVIEW
// ==========================================
function renderDetailedReview() {
  const container = document.getElementById("review-questions-list");
  if (!container || !state.currentExam) return;

  container.innerHTML = "";
  const filter = state.reviewFilter;

  state.currentExam.questions.forEach((q, idx) => {
    const userAns = state.userAnswers[q.id];
    const isCorrect = userAns === q.correctAnswer;
    const isUnanswered = userAns === undefined;
    const isSkipped = !!state.skippedQuestions[q.id];

    if (filter === "wrong" && (isCorrect || isUnanswered || isSkipped)) return;
    if (filter === "correct" && (!isCorrect || isSkipped)) return;
    if (filter === "unanswered" && (!isUnanswered || isSkipped)) return;

    const card = document.createElement("div");
    card.className = "p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all";

    let statusBadge = "";
    if (isSkipped) {
      statusBadge = `<span class="px-2.5 py-1 text-xs font-bold rounded-md bg-rose-100 text-rose-800">Đã bỏ qua · thiếu audio</span>`;
    } else if (isCorrect) {
      statusBadge = `<span class="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-100 text-emerald-800 flex items-center gap-1">✓ Đúng</span>`;
    } else if (isUnanswered) {
      statusBadge = `<span class="px-2.5 py-1 text-xs font-bold rounded-md bg-slate-100 text-slate-600 flex items-center gap-1">⚪ Chưa làm</span>`;
    } else {
      statusBadge = `<span class="px-2.5 py-1 text-xs font-bold rounded-md bg-rose-100 text-rose-800 flex items-center gap-1">✕ Sai (Bạn chọn ${userAns})</span>`;
    }

    card.innerHTML = `
      <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm flex items-center justify-center">${idx + 1}</span>
          <span class="text-xs font-semibold text-slate-500">${q.part || "Câu hỏi"}</span>
        </div>
        ${statusBadge}
      </div>

      ${shouldShowQuestionInstruction(q) ? `
        <div class="mb-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-base leading-relaxed">${formatMathText(q.instruction)}</div>
      ` : ""}

      ${q.context ? `
        <div class="text-base text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 mb-3 whitespace-pre-line">${buildResolvedContext(q.context, q, state.isSubmitted)}</div>
      ` : ""}

      ${getActiveBlankNumbers(q).length ? `
        <div class="resolved-answer-map mb-3"><span>Đáp án đúng · ${q.correctAnswer}</span><b>${formatMathText(getMappedOptionText(q.options.find(option => option.key === q.correctAnswer)?.text || "", q))}</b></div>
      ` : getArrangementSolution(q) ? `
        <div class="resolved-answer-map mb-3"><span>Thứ tự đúng</span><b>${getArrangementSolution(q)}</b></div>
      ` : ""}

      <div class="font-semibold text-slate-900 mb-4 text-lg sm:text-xl leading-relaxed">${formatMathText(q.question)}</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3.5">
        ${q.options.map(opt => {
          let optClass = "p-3 sm:p-4 rounded-2xl border text-base sm:text-lg font-medium flex items-center gap-3 ";
          if (opt.key === q.correctAnswer) {
            optClass += "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500";
          } else if (userAns === opt.key && !isCorrect) {
            optClass += "border-rose-400 bg-rose-50 text-rose-950 line-through";
          } else {
            optClass += "border-slate-200 bg-slate-50/50 text-slate-700";
          }
          return `
            <div class="${optClass}">
              <span class="w-6 h-6 rounded-md ${opt.key === q.correctAnswer ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'} flex items-center justify-center font-bold text-xs flex-shrink-0">${opt.key}</span>
              <span class="flex-1">${formatMathText(getMappedOptionText(opt.text, q, state.isSubmitted))}</span>
              ${opt.key === q.correctAnswer ? '<span class="text-[11px] text-emerald-700 font-bold ml-auto whitespace-nowrap">Đáp án đúng</span>' : ''}
            </div>
          `;
        }).join("")}
      </div>

      <div class="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800">
        <div class="font-bold text-blue-900 mb-1 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>
          Lời giải chi tiết:
        </div>
        <div class="whitespace-pre-line leading-relaxed text-slate-700 pl-5 font-normal">${formatMathText(q.explanation)}</div>
      </div>
    `;

    container.appendChild(card);
  });

  renderAllMathInElement();
}

function setReviewFilter(filter) {
  state.reviewFilter = filter;
  document.querySelectorAll(".review-filter-btn").forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.className = "review-filter-btn px-2.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm";
    } else {
      btn.className = "review-filter-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50";
    }
  });
  renderDetailedReview();
}

function retryWrongQuestionsOnly() {
  if (!state.currentExam) return;
  const wrongQuestions = state.currentExam.questions.filter(q => {
    return !state.skippedQuestions[q.id] && state.userAnswers[q.id] !== undefined && state.userAnswers[q.id] !== q.correctAnswer;
  });

  if (wrongQuestions.length === 0) {
    alert("Tuyệt vời! Bạn không có câu nào làm sai cả.");
    return;
  }

  startExam(state.currentExam.id, "quiz", wrongQuestions);
}

// ==========================================
// 13. DASHBOARD & EXAM CATALOG
// ==========================================
function renderDashboard() {
  const container = document.getElementById("exams-cards-container");
  if (!container || !window.EXAMS_REGISTRY) return;

  container.innerHTML = "";
  const searchKeyword = (document.getElementById("search-exam-input")?.value || "").toLowerCase().trim();

  const filtered = window.EXAMS_REGISTRY.filter(exam => {
    const matchSearch = exam.title.toLowerCase().includes(searchKeyword) ||
                        exam.author.toLowerCase().includes(searchKeyword) ||
                        exam.tags.some(t => t.toLowerCase().includes(searchKeyword));
    return matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <p class="text-sm font-semibold">Không tìm thấy đề thi phù hợp với từ khóa.</p>
      </div>
    `;
    return;
  }

  const subjects = ["Tiếng Anh 8", "Toán 8"];
  subjects.forEach(subject => {
    const subjectExams = filtered.filter(exam => exam.subject === subject);
    if (!subjectExams.length) return;
    const section = document.createElement("section");
    section.id = subject === "Tiếng Anh 8" ? "subject-english" : "subject-math";
    section.className = "subject-section";
    section.innerHTML = `<div class="mb-4 flex items-end justify-between gap-3"><div><h2 class="text-2xl sm:text-3xl font-black text-slate-900">${subject === "Tiếng Anh 8" ? "📘 Tiếng Anh 8" : "📐 Toán 8"}</h2><p class="mt-1 text-base text-slate-600">${subjectExams.length} bộ đề</p></div></div><div class="subject-exam-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"></div>`;
    container.appendChild(section);
    const grid = section.querySelector(".subject-exam-grid");
    subjectExams.forEach(exam => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between";

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-2.5">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-md ${exam.badgeColor}">${exam.badge}</span>
          <span class="text-sm font-semibold text-slate-600 flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            ${exam.durationMinutes} phút
          </span>
        </div>

        <h3 class="font-extrabold text-slate-900 text-lg leading-snug mb-2 hover:text-blue-600 cursor-pointer">${exam.title}</h3>
        <p class="text-base font-medium text-slate-600 mb-3">${exam.author} • ${exam.questionsCount} câu</p>

        <div class="flex flex-wrap gap-1.5 mb-5">
          ${exam.tags.map(t => `<span class="text-sm font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">${t}</span>`).join("")}
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
        <button class="btn-start-exam w-full min-h-14 py-3 px-3 rounded-xl font-extrabold text-base bg-blue-600 hover:bg-blue-700 text-white shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer" data-id="${exam.id}">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.5L19 7.5V19a2 2 0 01-2 2z"/></svg>
          Thi Thử
        </button>
        <button class="btn-start-quiz w-full min-h-14 py-3 px-3 rounded-xl font-extrabold text-base bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer" data-id="${exam.id}">
          <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/></svg>
          Game Quiz
        </button>
      </div>
    `;

    card.querySelector(".btn-start-exam").addEventListener("click", () => startExam(exam.id, "exam"));
    card.querySelector(".btn-start-quiz").addEventListener("click", () => startExam(exam.id, "quiz"));
    grid.appendChild(card);
    });
  });
}

function showDashboardView() {
  clearInterval(state.timerInterval);
  document.getElementById("view-exam").classList.add("hidden");
  document.getElementById("view-result").classList.add("hidden");
  document.getElementById("view-dashboard").classList.remove("hidden");
  document.body.classList.add("dashboard-active");
  document.getElementById("header-exam-title").textContent = "Ôn tập Lớp 8";
  renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 14. HISTORY MODAL
// ==========================================
function openHistoryModal() {
  loadSavedData();
  renderHistoryModal();
  document.getElementById("modal-history").classList.remove("hidden");
}

function closeHistoryModal() {
  document.getElementById("modal-history").classList.add("hidden");
}

function renderHistoryModal() {
  const container = document.getElementById("history-list-container");
  if (!container) return;

  if (state.history.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-400">
        <svg class="w-12 h-12 mx-auto text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="font-medium text-sm">Chưa có lịch sử làm bài thi nào.</p>
        <p class="text-xs text-slate-400 mt-1">Kết quả sau khi bạn nộp bài sẽ tự động được lưu tại đây!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.history.map(item => `
    <div class="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors flex items-center justify-between gap-3">
      <div class="min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] font-bold px-2 py-0.5 rounded ${item.mode === 'quiz' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}">${item.mode === 'quiz' ? 'Quiz' : 'Thi Thử'}</span>
          <span class="text-xs text-slate-400">${item.date}</span>
        </div>
        <h4 class="font-bold text-slate-900 text-xs sm:text-sm truncate">${item.examTitle}</h4>
        <div class="text-xs text-slate-500 mt-0.5">
          Đúng: <b class="text-emerald-600">${item.correctCount}/${item.totalCount}</b> câu (${item.percentage}%)${item.skippedCount ? ` • Bỏ qua: ${item.skippedCount}` : ""} • Thời gian: ${item.timeSpent}
        </div>
      </div>
      <div class="text-right flex flex-col items-end flex-shrink-0">
        <span class="text-xl sm:text-2xl font-black ${item.score >= 8 ? 'text-emerald-600' : item.score >= 5 ? 'text-blue-600' : 'text-rose-600'}">${item.score.toFixed(1)}</span>
        <span class="text-[10px] text-slate-400 font-semibold">Điểm / 10</span>
      </div>
    </div>
  `).join("");
}

// ==========================================
// 15. FORMULA & MATH FORMATTER (KaTeX Helper)
// ==========================================
function formatMathText(str) {
  if (!str) return "";
  return str;
}

function renderAllMathInElement() {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    } catch (e) {}
  }
}

// ==========================================
// 16. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadSavedData();

  // Dashboard search
  document.getElementById("search-exam-input")?.addEventListener("input", renderDashboard);

  // Top Navbar controls
  document.getElementById("btn-back-home")?.addEventListener("click", () => {
    if (!state.isSubmitted && state.timeRemaining > 0) {
      if (confirm("Bạn có muốn tạm dừng và quay lại danh sách đề thi không? Tiến trình bài làm sẽ được lưu.")) {
        showDashboardView();
      }
    } else {
      showDashboardView();
    }
  });

  document.getElementById("btn-open-share")?.addEventListener("click", openShareModal);
  document.getElementById("btn-open-history")?.addEventListener("click", openHistoryModal);
  document.getElementById("btn-close-history")?.addEventListener("click", closeHistoryModal);
  document.getElementById("btn-clear-history")?.addEventListener("click", clearHistory);

  // Sound toggle
  const soundBtn = document.getElementById("btn-toggle-sound");
  soundBtn?.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    soundBtn.innerHTML = state.soundEnabled ? `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
      <span class="hidden lg:inline">Bật âm</span>
    ` : `
      <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z m12 0l-6-6m0 6l6-6"/></svg>
      <span class="hidden lg:inline">Tắt âm</span>
    `;
    showCelebrationToast(state.soundEnabled ? "🔊 Đã bật âm thanh" : "🔇 Đã tắt âm thanh", "info");
  });

  // Navigation buttons
  document.getElementById("btn-prev")?.addEventListener("click", goToPrevQuestion);
  document.getElementById("btn-next")?.addEventListener("click", goToNextQuestion);
  document.getElementById("btn-flag")?.addEventListener("click", toggleFlagCurrentQuestion);
  document.getElementById("btn-clear-selection")?.addEventListener("click", clearCurrentAnswer);
  document.getElementById("btn-submit-exam")?.addEventListener("click", openSubmitConfirmModal);

  // Mobile Bottom Bar Controls
  document.getElementById("mobile-btn-prev")?.addEventListener("click", goToPrevQuestion);
  document.getElementById("mobile-btn-next")?.addEventListener("click", goToNextQuestion);
  document.getElementById("mobile-btn-submit")?.addEventListener("click", openSubmitConfirmModal);
  document.getElementById("mobile-btn-open-drawer")?.addEventListener("click", openMobileDrawer);
  document.getElementById("btn-open-mobile-palette")?.addEventListener("click", openMobileDrawer);
  document.getElementById("btn-close-mobile-drawer")?.addEventListener("click", closeMobileDrawer);
  document.getElementById("mobile-drawer-backdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "mobile-drawer-backdrop") closeMobileDrawer();
  });

  // Mobile Share Copy button
  document.getElementById("btn-copy-share-link")?.addEventListener("click", copyShareLink);

  // Submit Modal buttons
  document.getElementById("btn-modal-cancel")?.addEventListener("click", closeSubmitConfirmModal);
  document.getElementById("btn-modal-confirm")?.addEventListener("click", submitExam);

  // Result buttons
  document.getElementById("btn-retry-wrong")?.addEventListener("click", retryWrongQuestionsOnly);
  document.getElementById("btn-retry-all")?.addEventListener("click", () => {
    if (state.currentExam) startExam(state.currentExam.id, state.mode);
  });
  document.getElementById("btn-result-back-home")?.addEventListener("click", showDashboardView);

  // Review filters
  document.querySelectorAll(".review-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => setReviewFilter(btn.dataset.filter));
  });

  // Check if server is running and detect LAN URL
  fetch("/api/lan-info")
    .then(r => r.json())
    .then(data => {
      if (data && data.url) {
        state.lanUrl = data.url;
      }
    })
    .catch(() => {});

  // Open the subject and exam catalog first so students can choose what to practice.
  showDashboardView();
});
