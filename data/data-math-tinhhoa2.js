// ĐỀ TINH HOA ÔN LUYỆN THI GIỮA HỌC KÌ 1 TOÁN 8 – ĐỀ SỐ 2 (THẦY NGUYỄN ĐÌNH KHIÊM)
window.EXAM_MATH_TINHHOA_2 = {
  id: "toan8_tinhhoa_2",
  title: "ĐỀ TINH HOA GIỮA HỌC KÌ 1 - TOÁN 8 (ĐỀ SỐ 2)",
  subject: "Toán 8",
  durationMinutes: 60,
  author: "Thầy Nguyễn Đình Khiêm - Map EDU",
  description: "Trọn bộ đề thi tinh hoa số 2: Đơn thức đồng dạng, bậc đa thức, điều kiện phép chia hết, hằng đẳng thức, dấu hiệu nhận biết hình bình hành, hình chữ nhật, hình thoi, hình vuông.",
  totalQuestions: 18,
  questions: [
    {
      id: 1,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất trong các phương án A, B, C, D.",
      question: "Trong các đơn thức sau: $-2xy; 3x^2y; -4x^2y^2; \\frac{5}{2}x^2y; 12x^2$. Có bao nhiêu đơn thức đồng dạng với đơn thức $-\\frac{3}{2}x^2y$?",
      options: [
        { key: "A", text: "1" },
        { key: "B", text: "2" },
        { key: "C", text: "3" },
        { key: "D", text: "4" }
      ],
      correctAnswer: "B",
      explanation: "Đơn thức $-\\frac{3}{2}x^2y$ có phần biến là $x^2y$.\nTrong các đơn thức đã cho, các đơn thức có cùng phần biến $x^2y$ là: $3x^2y$ và $\\frac{5}{2}x^2y$.\nVậy có tất cả 2 đơn thức đồng dạng."
    },
    {
      id: 2,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Đa thức nào sau đây KHÔNG PHẢI là đa thức bậc 4?",
      options: [
        { key: "A", text: "$4xy^2z$" },
        { key: "B", text: "$x^4 - 3^5$" },
        { key: "C", text: "$x^4 - \\frac{1}{2}xy^3z$" },
        { key: "D", text: "$xy^2 + xyzt$" }
      ],
      correctAnswer: "C",
      explanation: "Xét bậc của từng đa thức:\n• A: hạng tử có bậc $1 + 2 + 1 = 4$ (bậc 4).\n• B: $x^4$ có bậc 4, số $-3^5$ là hằng số bậc 0 => bậc 4.\n• C: hạng tử $-\\frac{1}{2}xy^3z$ có bậc $1 + 3 + 1 = 5$, nên đa thức này có bậc 5 (không phải bậc 4).\n• D: hạng tử $xyzt$ có bậc $1+1+1+1=4$ => bậc 4."
    },
    {
      id: 3,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Điều kiện của số tự nhiên $n$ để phép chia $x^5y^n : x^n y^3$ là phép chia hết là:",
      options: [
        { key: "A", text: "$n = 3$" },
        { key: "B", text: "$n = 4$" },
        { key: "C", text: "$n = 5$" },
        { key: "D", text: "$n \\in \\{3; 4; 5\\}$" }
      ],
      correctAnswer: "D",
      explanation: "Để đơn thức chia hết cho đơn thức thì số mũ của mỗi biến trong đơn thức bị chia phải lớn hơn hoặc bằng số mũ của biến đó trong đơn thức chia:\n• Với biến $x$: $5 \\ge n \\implies n \\le 5$\n• Với biến $y$: $n \\ge 3$\nVì $n$ là số tự nhiên nên $n \\in \\{3; 4; 5\\}$."
    },
    {
      id: 4,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Đẳng thức nào sau đây là hằng đẳng thức đúng với mọi giá trị của biến?",
      options: [
        { key: "A", text: "$x^2 - x = -x + x^2$" },
        { key: "B", text: "$x(x - 1) = x - x^2$" },
        { key: "C", text: "$(a - b)^2 = -(b - a)^2$" },
        { key: "D", text: "$a - 2 = 2 - a$" }
      ],
      correctAnswer: "A",
      explanation: "Theo tính chất giao hoán của phép cộng đại số: $x^2 - x = -x + x^2$ luôn đúng với mọi $x$, do đó đây là một hằng đẳng thức."
    },
    {
      id: 5,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Đa thức $-4x^2 + 12x - 9$ được viết thành:",
      options: [
        { key: "A", text: "$(2x - 3)(2x + 3)$" },
        { key: "B", text: "$-(2x - 3)^2$" },
        { key: "C", text: "$(3 - 2x)^2$" },
        { key: "D", text: "$-(2x + 3)^2$" }
      ],
      correctAnswer: "B",
      explanation: "Đặt dấu trừ ra ngoài ngoặc:\n$$-4x^2 + 12x - 9 = -(4x^2 - 12x + 9) = -[(2x)^2 - 2\\cdot 2x\\cdot 3 + 3^2] = -(2x - 3)^2$$."
    },
    {
      id: 6,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Cho tứ giác $ABCD$. Khẳng định nào sau đây là SAI?",
      options: [
        { key: "A", text: "$AB$ và $BC$ là hai cạnh kề nhau." },
        { key: "B", text: "$BC$ và $AD$ là hai cạnh đối nhau." },
        { key: "C", text: "$\\widehat{A}$ và $\\widehat{B}$ là hai góc đối nhau." },
        { key: "D", text: "$AC$ và $BD$ là hai đường chéo." }
      ],
      correctAnswer: "C",
      explanation: "Trong tứ giác $ABCD$, góc $A$ và góc $B$ là hai góc kề nhau (cùng nằm trên cạnh $AB$). Hai góc đối nhau phải là góc $A$ và góc $C$."
    },
    {
      id: 7,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khẳng định nào sau đây là ĐÚNG?",
      options: [
        { key: "A", text: "Tứ giác có 4 đường chéo." },
        { key: "B", text: "Tổng các góc của một tứ giác bằng $180^\\circ$." },
        { key: "C", text: "Tồn tại một tứ giác có 1 góc tù và 3 góc vuông." },
        { key: "D", text: "Tứ giác lồi là tứ giác luôn nằm về một phía của đường thẳng chứa một cạnh bất kì của tứ giác đó." }
      ],
      correctAnswer: "D",
      explanation: "Theo định nghĩa: Tứ giác lồi là tứ giác mà luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kỳ cạnh nào của tứ giác."
    },
    {
      id: 8,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khẳng định nào sau đây là SAI về hình bình hành?",
      options: [
        { key: "A", text: "Tứ giác có hai cạnh đối song song và bằng nhau là hình bình hành." },
        { key: "B", text: "Hình thang có hai cạnh bên song song là hình bình hành." },
        { key: "C", text: "Hình thang có hai đường chéo bằng nhau là hình bình hành." },
        { key: "D", text: "Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành." }
      ],
      correctAnswer: "C",
      explanation: "Hình thang có hai đường chéo bằng nhau là HÌNH THANG CÂN, chứ không phải hình bình hành. Do đó khẳng định C là sai."
    },
    {
      id: 9,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khẳng định nào sau đây là SAI? Tứ giác $ABCD$ là hình chữ nhật khi:",
      options: [
        { key: "A", text: "$\\widehat{A} = \\widehat{B} = \\widehat{C} = 90^\\circ$." },
        { key: "B", text: "$\\widehat{A} = \\widehat{B} = \\widehat{C} = 90^\\circ$ và $AB // CD$." },
        { key: "C", text: "$AB = CD = AD = BC$." },
        { key: "D", text: "$AB // CD; AB = CD; AC = BD$." }
      ],
      correctAnswer: "C",
      explanation: "Tứ giác có 4 cạnh bằng nhau $AB = CD = AD = BC$ là HÌNH THOI, chưa đủ điều kiện có góc vuông để là hình chữ nhật. Do đó khẳng định C là sai."
    },
    {
      id: 10,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Trong các dấu hiệu nhận biết sau, dấu hiệu nào KHÔNG ĐỦ để kết luận một hình là hình vuông?",
      options: [
        { key: "A", text: "Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông." },
        { key: "B", text: "Hình thoi có một góc vuông là hình vuông." },
        { key: "C", text: "Hình chữ nhật có một đường chéo là đường phân giác của một góc là hình vuông." },
        { key: "D", text: "Hình thoi có hai đường chéo vuông góc là hình vuông." }
      ],
      correctAnswer: "D",
      explanation: "Mọi hình thoi đều có sẵn tính chất 'hai đường chéo vuông góc với nhau', do đó chỉ nói hình thoi có hai đường chéo vuông góc thì vẫn chỉ là hình thoi, không thể suy ra là hình vuông!"
    },
    {
      id: 11,
      part: "PHẦN 2. ĐÚNG SAI",
      instruction: "Cho biểu thức $A$ thỏa mãn $45x^6y^3 : A = 5x^3y^2$.",
      question: "Biểu thức $A$ là:",
      options: [
        { key: "A", text: "$A = 9x^3y$" },
        { key: "B", text: "$A = 9x^2y$" },
        { key: "C", text: "$A = 40x^3y$" },
        { key: "D", text: "$A = 9x^3y^2$" }
      ],
      correctAnswer: "A",
      explanation: "$$A = 45x^6y^3 : (5x^3y^2) = (45:5) \\cdot (x^6:x^3) \\cdot (y^3:y^2) = 9x^3y$$."
    },
    {
      id: 12,
      part: "PHẦN 2. ĐÚNG SAI",
      instruction: "Với $A = 9x^3y$, tính giá trị của $A$ tại $x = -1, y = 2$.",
      question: "Giá trị của biểu thức $A$ tại $x = -1, y = 2$ là:",
      options: [
        { key: "A", text: "$-18$" },
        { key: "B", text: "$18$" },
        { key: "C", text: "$-9$" },
        { key: "D", text: "$36$" }
      ],
      correctAnswer: "A",
      explanation: "$$A = 9 \\cdot (-1)^3 \\cdot 2 = 9 \\cdot (-1) \\cdot 2 = -18$$."
    },
    {
      id: 13,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính toán và chọn kết quả chính xác.",
      question: "Xác định bậc của đa thức: $P = 3xyz - 5x^2y - 6xyz + 4x^3yz$.",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "4" },
        { key: "C", text: "3" },
        { key: "D", text: "6" }
      ],
      correctAnswer: "A",
      explanation: "Thu gọn đa thức:\n$$P = (3xyz - 6xyz) - 5x^2y + 4x^3yz = -3xyz - 5x^2y + 4x^3yz$$\n• Hạng tử $-3xyz$ có bậc $1+1+1=3$.\n• Hạng tử $-5x^2y$ có bậc $2+1=3$.\n• Hạng tử $4x^3yz$ có bậc $3+1+1=5$.\nBậc của đa thức là bậc của hạng tử có bậc cao nhất trong dạng thu gọn, tức là 5."
    },
    {
      id: 14,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính toán và chọn kết quả chính xác.",
      question: "Giá trị của biểu thức $A = (3x + 1)^2 + (3x - 1)^2 - 2(3x - 1)(3x + 1)$ bằng bao nhiêu?",
      options: [
        { key: "A", text: "4" },
        { key: "B", text: "0" },
        { key: "C", text: "2" },
        { key: "D", text: "36x^2" }
      ],
      correctAnswer: "A",
      explanation: "Đặt $u = 3x + 1, v = 3x - 1$. Biểu thức có dạng:\n$$u^2 + v^2 - 2uv = (u - v)^2$$\nThay lại:\n$$A = [(3x + 1) - (3x - 1)]^2 = (3x + 1 - 3x + 1)^2 = 2^2 = 4$$ (không phụ thuộc vào $x$)."
    },
    {
      id: 15,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính toán số đo góc hình học.",
      question: "Một hình thang vuông có một góc nhọn bằng $75^\\circ$. Tính số đo góc tù còn lại của hình thang đó (đơn vị: độ):",
      options: [
        { key: "A", text: "$105^\\circ$" },
        { key: "B", text: "$115^\\circ$" },
        { key: "C", text: "$90^\\circ$" },
        { key: "D", text: "$120^\\circ$" }
      ],
      correctAnswer: "A",
      explanation: "Hình thang vuông có 2 góc vuông ($90^\\circ$). Hai góc còn lại kề một cạnh bên không vuông có tổng bằng $180^\\circ$ (hai góc trong cùng phía bù nhau):\n$$\\text{Góc còn lại} = 180^\\circ - 75^\\circ = 105^\\circ$$."
    },
    {
      id: 16,
      part: "PHẦN 4. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Phân tích đa thức thành nhân tử.",
      question: "Phân tích đa thức sau thành nhân tử: $8x^3yz + 12x^2yz + 6xyz + yz$",
      options: [
        { key: "A", text: "$yz(2x + 1)^3$" },
        { key: "B", text: "$yz(2x - 1)^3$" },
        { key: "C", text: "$xyz(2x + 1)^3$" },
        { key: "D", text: "$yz(4x^2 + 1)$" }
      ],
      correctAnswer: "A",
      explanation: "Đặt nhân tử chung $yz$ ra ngoài:\n$$yz(8x^3 + 12x^2 + 6x + 1)$$\nNhận thấy $8x^3 + 12x^2 + 6x + 1 = (2x)^3 + 3(2x)^2\\cdot 1 + 3(2x)\\cdot 1^2 + 1^3 = (2x + 1)^3$.\nVậy kết quả là $yz(2x + 1)^3$."
    },
    {
      id: 17,
      part: "PHẦN 4. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Phân tích đa thức thành nhân tử.",
      question: "Phân tích đa thức thành nhân tử: $x^4 - 5x^2 + 4$",
      options: [
        { key: "A", text: "$(x - 1)(x + 1)(x - 2)(x + 2)$" },
        { key: "B", text: "$(x^2 - 4)(x^2 + 1)$" },
        { key: "C", text: "$(x - 2)^2(x + 1)^2$" },
        { key: "D", text: "$(x^2 - 1)^2$" }
      ],
      correctAnswer: "A",
      explanation: "Tách hạng tử giữa: $-5x^2 = -x^2 - 4x^2$:\n$$x^4 - x^2 - 4x^2 + 4 = x^2(x^2 - 1) - 4(x^2 - 1) = (x^2 - 1)(x^2 - 4)$$\nTiếp tục dùng hiệu hai bình phương:\n$$= (x - 1)(x + 1)(x - 2)(x + 2)$$."
    },
    {
      id: 18,
      part: "PHẦN 4. TỰ LUẬN HÌNH HỌC",
      instruction: "Cho $\\Delta ABC$ cân tại $A$, trung tuyến $AM$, $I$ là trung điểm $AC$. Gọi $N$ là điểm đối xứng của $M$ qua $I$.",
      question: "Tứ giác $AMCN$ là hình gì?",
      options: [
        { key: "A", text: "Hình chữ nhật." },
        { key: "B", text: "Hình bình hành không có góc vuông." },
        { key: "C", text: "Hình thoi." },
        { key: "D", text: "Hình vuông." }
      ],
      correctAnswer: "A",
      explanation: "• Vì $I$ là trung điểm của $AC$ và $I$ là trung điểm của $MN$ (do $N$ đối xứng với $M$ qua $I$), nên tứ giác $AMCN$ có hai đường chéo cắt nhau tại trung điểm mỗi đường $\\implies AMCN$ là hình bình hành.\n• Mặt khác, $\\Delta ABC$ cân tại $A$ có $AM$ là đường trung tuyến nên $AM$ đồng thời là đường cao $\\implies AM \\perp BC \\implies \\widehat{AMC} = 90^\\circ$.\n• Hình bình hành $AMCN$ có 1 góc vuông $\\widehat{AMC} = 90^\\circ$ nên $AMCN$ là HÌNH CHỮ NHẬT."
    }
  ]
};
