// ĐỀ TINH HOA ÔN LUYỆN THI GIỮA HỌC KÌ 1 TOÁN 8 – ĐỀ SỐ 1 (THẦY NGUYỄN ĐÌNH KHIÊM)
window.EXAM_MATH_TINHHOA_1 = {
  id: "toan8_tinhhoa_1",
  title: "ĐỀ TINH HOA GIỮA HỌC KÌ 1 - TOÁN 8 (ĐỀ SỐ 1)",
  subject: "Toán 8",
  durationMinutes: 60,
  author: "Thầy Nguyễn Đình Khiêm - Map EDU",
  description: "Đề thi tinh hoa chuẩn cấu trúc mới: Trắc nghiệm 4 phương án, Trắc nghiệm Đúng/Sai, Trắc nghiệm trả lời ngắn và Tự luận (Đa thức thu gọn, Phép chia hết, Tứ giác, Hình thang cân, Hình thoi).",
  totalQuestions: 18,
  questions: [
    {
      id: 1,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất trong các phương án A, B, C, D.",
      question: "Đa thức nào sau đây chưa thu gọn?",
      options: [
        { key: "A", text: "$4x^2 + x - y$" },
        { key: "B", text: "$x^4y + x - 2yx^4$" },
        { key: "C", text: "$-x^3y + \\frac{2}{5}y^2$" },
        { key: "D", text: "$\\frac{x + 2y}{5}$" }
      ],
      correctAnswer: "B",
      explanation: "Đa thức thu gọn là đa thức không còn hai hạng tử nào đồng dạng.\nTrong đa thức $x^4y + x - 2yx^4$, có hai hạng tử đồng dạng là $x^4y$ và $-2yx^4$ (vì $yx^4 = x^4y$) chưa được cộng trừ lại với nhau, do đó đây là đa thức chưa thu gọn."
    },
    {
      id: 2,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Đơn thức nào sau đây đồng dạng với đơn thức $-3x^2y$?",
      options: [
        { key: "A", text: "$3x^2yz$" },
        { key: "B", text: "$\\frac{1}{2}xyx$" },
        { key: "C", text: "$xy^2$" },
        { key: "D", text: "$-3x^2z$" }
      ],
      correctAnswer: "B",
      explanation: "Ta thu gọn đơn thức ở đáp án B: $\\frac{1}{2}xyx = \\frac{1}{2}x^2y$. Đơn thức này có cùng phần biến là $x^2y$ với đơn thức $-3x^2y$ nên chúng đồng dạng với nhau."
    },
    {
      id: 3,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Đa thức $7x^3y^2z - 2x^4y^3$ chia hết cho đơn thức nào dưới đây?",
      options: [
        { key: "A", text: "$3x^4$" },
        { key: "B", text: "$-3x^4$" },
        { key: "C", text: "$-2x^3y$" },
        { key: "D", text: "$2xy^3$" }
      ],
      correctAnswer: "C",
      explanation: "Đa thức chia hết cho đơn thức khi từng hạng tử của đa thức đều chia hết cho đơn thức đó:\n• Hạng tử $7x^3y^2z$ chia hết cho $-2x^3y$ (vì số mũ của $x$ là $3 \\ge 3$, số mũ của $y$ là $2 \\ge 1$).\n• Hạng tử $-2x^4y^3$ chia hết cho $-2x^3y$ (vì số mũ của $x$ là $4 \\ge 3$, số mũ của $y$ là $3 \\ge 1$).\nDo đó đa thức chia hết cho $-2x^3y$."
    },
    {
      id: 4,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Giá trị của biểu thức $A = x^4 + 4x^2y - 6z$ tại $x = 4, y = -5, z = -2$ là:",
      options: [
        { key: "A", text: "$-76$" },
        { key: "B", text: "$-52$" },
        { key: "C", text: "$-25$" },
        { key: "D", text: "$37$" }
      ],
      correctAnswer: "B",
      explanation: "Thay $x = 4, y = -5, z = -2$ vào biểu thức $A$:\n$$A = 4^4 + 4\\cdot (4^2)\\cdot (-5) - 6\\cdot (-2)$$\n$$A = 256 + 4\\cdot 16\\cdot (-5) + 12 = 256 - 320 + 12 = -52$$."
    },
    {
      id: 5,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Hằng đẳng thức $A^2 - B^2 = (A - B)(A + B)$ có tên là:",
      options: [
        { key: "A", text: "bình phương của một tổng" },
        { key: "B", text: "bình phương của một hiệu" },
        { key: "C", text: "tổng hai bình phương" },
        { key: "D", text: "hiệu hai bình phương" }
      ],
      correctAnswer: "D",
      explanation: "$A^2 - B^2$ là hiệu của hai biểu thức bình phương, được gọi là 'hiệu hai bình phương'."
    },
    {
      id: 6,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Cho $x^3 + 12x^2 + 48x + 64 = (x + a)^3$. Giá trị của $a$ là:",
      options: [
        { key: "A", text: "$-64$" },
        { key: "B", text: "$64$" },
        { key: "C", text: "$-4$" },
        { key: "D", text: "$4$" }
      ],
      correctAnswer: "D",
      explanation: "Ta có:\n$$x^3 + 12x^2 + 48x + 64 = x^3 + 3\\cdot x^2\\cdot 4 + 3\\cdot x\\cdot 4^2 + 4^3 = (x + 4)^3$$\nSo sánh với $(x + a)^3$, ta được $a = 4$."
    },
    {
      id: 7,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Trong một tứ giác, hai cạnh kề nhau là hai cạnh:",
      options: [
        { key: "A", text: "có chung một đỉnh." },
        { key: "B", text: "không có đỉnh chung nào." },
        { key: "C", text: "thuộc một đường thẳng." },
        { key: "D", text: "có hai đỉnh chung." }
      ],
      correctAnswer: "A",
      explanation: "Định nghĩa hình học: Hai cạnh kề nhau của một tứ giác là hai đoạn thẳng có chung đúng một đỉnh."
    },
    {
      id: 8,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Cho tứ giác $ABCD$ với hai đường chéo $AC, BD$.",
      question: "Khẳng định nào sau đây là SAI?",
      options: [
        { key: "A", text: "Hai cạnh $AB$ và $BC$ kề nhau." },
        { key: "B", text: "Hai cạnh $BC$ và $DA$ đối nhau." },
        { key: "C", text: "Các cặp góc $\\widehat{A}$ và $\\widehat{B}$; $\\widehat{C}$ và $\\widehat{D}$ đối nhau." },
        { key: "D", text: "Các điểm nằm ngoài tứ giác không thuộc miền trong của tứ giác." }
      ],
      correctAnswer: "C",
      explanation: "Trong tứ giác $ABCD$, $\\widehat{A}$ và $\\widehat{B}$ là hai góc kề nhau cùng nhìn cạnh $AB$, không phải hai góc đối nhau. Hai góc đối nhau là $\\widehat{A}$ với $\\widehat{C}$ và $\\widehat{B}$ với $\\widehat{D}$."
    },
    {
      id: 9,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Cho tứ giác $ABCD$ có $\\widehat{A} = 50^\\circ, \\widehat{B} = 117^\\circ, \\widehat{C} = 71^\\circ$. Số đo góc ngoài tại đỉnh $D$ bằng:",
      options: [
        { key: "A", text: "$58^\\circ$" },
        { key: "B", text: "$107^\\circ$" },
        { key: "C", text: "$113^\\circ$" },
        { key: "D", text: "$83^\\circ$" }
      ],
      correctAnswer: "A",
      explanation: "Góc trong tại đỉnh $D$ của tứ giác:\n$$\\widehat{D} = 360^\\circ - (50^\\circ + 117^\\circ + 71^\\circ) = 360^\\circ - 238^\\circ = 122^\\circ$$\nGóc ngoài tại đỉnh $D$ kề bù với góc trong đỉnh $D$:\n$$\\widehat{D}_{\\text{ngoài}} = 180^\\circ - 122^\\circ = 58^\\circ$$."
    },
    {
      id: 10,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Cho hình thang cân $ABCD$ có $AB // CD$ và $\\widehat{A} = 125^\\circ$. Khi đó $\\widehat{B}$ bằng:",
      options: [
        { key: "A", text: "$65^\\circ$" },
        { key: "B", text: "$125^\\circ$" },
        { key: "C", text: "$90^\\circ$" },
        { key: "D", text: "$55^\\circ$" }
      ],
      correctAnswer: "B",
      explanation: "Tính chất hình thang cân: Hai góc kề một đáy thì bằng nhau.\nVì $AB // CD$ nên đáy là $AB$ và $CD$. Hai góc kề đáy $AB$ là $\\widehat{A}$ và $\\widehat{B} \\implies \\widehat{B} = \\widehat{A} = 125^\\circ$."
    },
    {
      id: 11,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khẳng định nào sau đây là ĐÚNG về nhận biết hình thoi?",
      options: [
        { key: "A", text: "Tứ giác có 4 cạnh bằng nhau là hình thoi." },
        { key: "B", text: "Tứ giác có hai đường chéo vuông góc là hình thoi." },
        { key: "C", text: "Hình bình hành có hai đường chéo bằng nhau là hình thoi." },
        { key: "D", text: "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình thoi." }
      ],
      correctAnswer: "A",
      explanation: "Theo định nghĩa: Tứ giác có 4 cạnh bằng nhau là hình thoi.\n• Phương án B sai vì cần là hình bình hành có 2 đường chéo vuông góc.\n• Phương án C sai vì hình bình hành có 2 đường chéo bằng nhau là hình chữ nhật.\n• Phương án D sai vì đó là hình bình hành."
    },
    {
      id: 12,
      part: "PHẦN 1. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Tứ giác $ABCD$ là hình bình hành nếu thỏa mãn điều kiện nào dưới đây?",
      options: [
        { key: "A", text: "$AB // CD, AC = BD$" },
        { key: "B", text: "$\\widehat{A} = \\widehat{C}$" },
        { key: "C", text: "$AB = CD$" },
        { key: "D", text: "$\\widehat{A} = \\widehat{C}; \\widehat{B} = \\widehat{D}$" }
      ],
      correctAnswer: "D",
      explanation: "Dấu hiệu nhận biết hình bình hành: Tứ giác có các góc đối bằng nhau ($\\widehat{A} = \\widehat{C}$ và $\\widehat{B} = \\widehat{D}$) là hình bình hành."
    },
    {
      id: 13,
      part: "PHẦN 2. CÂU HỎI ĐÚNG SAI",
      instruction: "Cho hai đa thức $P = x^2 - 4xy + 9$ và $Q = -6xy - 4y^2 + 9$. Đa thức $A$ thỏa mãn $P - A = Q$.",
      question: "Biểu thức của đa thức $A$ là:",
      options: [
        { key: "A", text: "$A = x^2 + 2xy + 4y^2$" },
        { key: "B", text: "$A = x^2 - 10xy - 4y^2 + 18$" },
        { key: "C", text: "$A = x^2 + 4y^2$" },
        { key: "D", text: "$A = 2xy + 4y^2$" }
      ],
      correctAnswer: "A",
      explanation: "Ta có $P - A = Q \\implies A = P - Q$:\n$$A = (x^2 - 4xy + 9) - (-6xy - 4y^2 + 9)$$\n$$A = x^2 - 4xy + 9 + 6xy + 4y^2 - 9 = x^2 + 2xy + 4y^2$$."
    },
    {
      id: 14,
      part: "PHẦN 2. CÂU HỎI ĐÚNG SAI",
      instruction: "Với $A = x^2 + 2xy + 4y^2$, xét biểu thức $M = (x - 2y)A - x^3 + 5$.",
      question: "Giá trị của biểu thức $M$ có phụ thuộc vào biến $x$ không?",
      options: [
        { key: "A", text: "Có, $M$ phụ thuộc vào cả $x$ và $y$." },
        { key: "B", text: "Không, giá trị của $M$ không phụ thuộc vào biến $x$." },
        { key: "C", text: "Chỉ phụ thuộc vào $x$ khi $y = 0$." },
        { key: "D", text: "Biểu thức $M$ luôn bằng 0." }
      ],
      correctAnswer: "B",
      explanation: "Ta có:\n$$(x - 2y)A = (x - 2y)(x^2 + 2xy + 4y^2) = x^3 - (2y)^3 = x^3 - 8y^3$$\nDo đó:\n$$M = (x^3 - 8y^3) - x^3 + 5 = -8y^3 + 5$$\nBiểu thức $M$ không còn chứa biến $x$, do đó giá trị của $M$ không phụ thuộc vào biến $x$."
    },
    {
      id: 15,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính toán và chọn đáp án chính xác.",
      question: "Cho $B - (5x^2 - 2xyz) = 2x^2 + 2xyz + 1$. Hạng tử tự do của đa thức $B$ là bao nhiêu?",
      options: [
        { key: "A", text: "1" },
        { key: "B", text: "-1" },
        { key: "C", text: "0" },
        { key: "D", text: "2" }
      ],
      correctAnswer: "A",
      explanation: "Chuyển vế tìm đa thức $B$:\n$$B = (2x^2 + 2xyz + 1) + (5x^2 - 2xyz) = 7x^2 + 1$$\nHạng tử tự do (hạng tử không chứa biến) của đa thức $B$ là 1."
    },
    {
      id: 16,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính toán và chọn đáp án chính xác.",
      question: "Cho biểu thức $x^3 - 9x^2 + 27x - m$ là lập phương của một hiệu $(x - 3)^3$. Tính giá trị của $m$:",
      options: [
        { key: "A", text: "27" },
        { key: "B", text: "-27" },
        { key: "C", text: "9" },
        { key: "D", text: "3" }
      ],
      correctAnswer: "A",
      explanation: "Khai triển $(x - 3)^3 = x^3 - 3\\cdot x^2\\cdot 3 + 3\\cdot x\\cdot 3^2 - 3^3 = x^3 - 9x^2 + 27x - 27$.\nSo sánh với $x^3 - 9x^2 + 27x - m$, ta có $-m = -27 \\implies m = 27$."
    },
    {
      id: 17,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính số đo góc trong hình học tứ giác.",
      question: "Cho tứ giác $ABCD$ có $\\widehat{D} = 90^\\circ, \\widehat{B} = 70^\\circ, \\widehat{C} = x, \\widehat{A} = 3x$. Tính số đo góc $A$ (đơn vị: độ):",
      options: [
        { key: "A", text: "$150^\\circ$" },
        { key: "B", text: "$50^\\circ$" },
        { key: "C", text: "$120^\\circ$" },
        { key: "D", text: "$100^\\circ$" }
      ],
      correctAnswer: "A",
      explanation: "Tổng các góc trong tứ giác bằng $360^\\circ$:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$$\n$$3x + 70^\\circ + x + 90^\\circ = 360^\\circ \\implies 4x + 160^\\circ = 360^\\circ$$\n$$4x = 200^\\circ \\implies x = 50^\\circ$$\nVậy số đo góc $A$ là $\\widehat{A} = 3x = 3 \\cdot 50^\\circ = 150^\\circ$."
    },
    {
      id: 18,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính diện tích hình học phẳng.",
      question: "Cho hình thoi $MNPQ$ có diện tích là $48\\text{ cm}^2$. Gọi $O$ là giao điểm của hai đường chéo. Tính diện tích tam giác $MON$ (đơn vị: $\\text{cm}^2$):",
      options: [
        { key: "A", text: "$12\\text{ cm}^2$" },
        { key: "B", text: "$24\\text{ cm}^2$" },
        { key: "C", text: "$16\\text{ cm}^2$" },
        { key: "D", text: "$8\\text{ cm}^2$" }
      ],
      correctAnswer: "A",
      explanation: "Hai đường chéo của hình thoi vuông góc với nhau tại trung điểm của mỗi đường và chia hình thoi thành 4 tam giác vuông bằng nhau:\n$$S_{\\Delta MON} = \\frac{1}{4} S_{MNPQ} = \\frac{48}{4} = 12\\text{ cm}^2$$."
    }
  ]
};
