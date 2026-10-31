// ĐỀ KIỂM TRA TRÚNG TỦ GIỮA HỌC KÌ 1 TOÁN 8 – ĐỀ SỐ 1 (THẦY NGUYỄN ĐÌNH KHIÊM)
window.EXAM_MATH_TRUNGTU_1 = {
  id: "toan8_trungtu_1",
  title: "ĐỀ TRÚNG TỦ GIỮA HỌC KÌ 1 - TOÁN 8 (ĐỀ SỐ 1)",
  subject: "Toán 8",
  durationMinutes: 45,
  author: "Thầy Nguyễn Đình Khiêm - Map EDU",
  description: "Bộ đề trúng tủ bám sát trọng tâm kiến thức: Đơn thức, đa thức nhiều biến, các hằng đẳng thức đáng nhớ, hình chóp tam giác đều, định lý Pythagore và góc trong tứ giác.",
  totalQuestions: 15,
  questions: [
    {
      id: 1,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi và khoanh tròn vào chữ cái đứng đầu.",
      question: "Đơn thức đồng dạng với đơn thức $x^2 y^3$ là:",
      options: [
        { key: "A", text: "$x^2 y^2$" },
        { key: "B", text: "$-\\frac{1}{3} x^2 y^3$" },
        { key: "C", text: "$2xy^3$" },
        { key: "D", text: "$y^3$" }
      ],
      correctAnswer: "B",
      explanation: "Hai đơn thức đồng dạng là hai đơn thức có hệ số khác 0 và có cùng phần biến.\n• Đơn thức đã cho có phần biến là $x^2 y^3$.\n• Đơn thức $-\\frac{1}{3} x^2 y^3$ có cùng phần biến $x^2 y^3$ nên đồng dạng với đơn thức đã cho."
    },
    {
      id: 2,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi.",
      question: "Trong các biểu thức sau, đâu là đơn thức nhiều biến?",
      options: [
        { key: "A", text: "$xy - x$" },
        { key: "B", text: "$-\\frac{1}{6}xyz$" },
        { key: "C", text: "$x + y + 2$" },
        { key: "D", text: "$2x - \\frac{1}{3}y$" }
      ],
      correctAnswer: "B",
      explanation: "Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến (không chứa phép cộng hoặc trừ giữa các biến).\n• $-\\frac{1}{6}xyz$ là tích giữa hằng số $-\\frac{1}{6}$ và ba biến $x, y, z$ nên là đơn thức nhiều biến.\n• Các phương án A, C, D đều chứa phép cộng/trừ nên là đa thức."
    },
    {
      id: 3,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi.",
      question: "Khai triển biểu thức $(y - 2)^3$ ta được:",
      options: [
        { key: "A", text: "$y^3 - 3y^2 + 3y - 8$" },
        { key: "B", text: "$y^3 + 6y^2 + 6y + 8$" },
        { key: "C", text: "$y^3 - 2y^2 + 3y - 1$" },
        { key: "D", text: "$y^3 - 6y^2 + 12y - 8$" }
      ],
      correctAnswer: "D",
      explanation: "Áp dụng hằng đẳng thức lập phương của một hiệu:\n$$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$$\nVới $A = y, B = 2$ ta có:\n$$(y - 2)^3 = y^3 - 3\\cdot y^2\\cdot 2 + 3\\cdot y\\cdot 2^2 - 2^3 = y^3 - 6y^2 + 12y - 8$$"
    },
    {
      id: 4,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi.",
      question: "Cho đẳng thức $x^3 + 8 = (x - b)(x^2 - 2x + 4)$. Giá trị của $b$ bằng:",
      options: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$8$" },
        { key: "D", text: "$-2$" }
      ],
      correctAnswer: "D",
      explanation: "Áp dụng hằng đẳng thức tổng hai lập phương:\n$$x^3 + 8 = x^3 + 2^3 = (x + 2)(x^2 - 2x + 4)$$\nTheo đề bài ta có $(x - b)(x^2 - 2x + 4) = (x + 2)(x^2 - 2x + 4)$\nSuy ra $x - b = x + 2 \\implies b = -2$."
    },
    {
      id: 5,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi.",
      question: "Hình chóp tam giác đều có bao nhiêu mặt?",
      options: [
        { key: "A", text: "3" },
        { key: "B", text: "4" },
        { key: "C", text: "5" },
        { key: "D", text: "6" }
      ],
      correctAnswer: "B",
      explanation: "Hình chóp tam giác đều có:\n• 1 mặt đáy là tam giác đều.\n• 3 mặt bên là các tam giác cân bằng nhau.\nTổng số mặt là $1 + 3 = 4$ mặt."
    },
    {
      id: 6,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi.",
      question: "Tam giác nào là tam giác vuông trong các tam giác có độ dài 3 cạnh như sau:",
      options: [
        { key: "A", text: "3cm, 4cm, 6cm" },
        { key: "B", text: "5cm, 7cm, 9cm" },
        { key: "C", text: "6cm, 10cm, 13cm" },
        { key: "D", text: "5cm, 12cm, 13cm" }
      ],
      correctAnswer: "D",
      explanation: "Theo định lý Pythagore đảo, nếu tam giác có bình phương cạnh lớn nhất bằng tổng bình phương hai cạnh kia thì đó là tam giác vuông:\n• $5^2 + 12^2 = 25 + 144 = 169 = 13^2$.\nDo đó bộ ba 5cm, 12cm, 13cm tạo thành một tam giác vuông."
    },
    {
      id: 7,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi.",
      question: "Cho tứ giác $ABCD$ có số đo các góc $\\widehat{A} = 85^\\circ$, $\\widehat{B} = 136^\\circ$, $\\widehat{C} = 129^\\circ$. Số đo góc $D$ là:",
      options: [
        { key: "A", text: "$20^\\circ$" },
        { key: "B", text: "$30^\\circ$" },
        { key: "C", text: "$36^\\circ$" },
        { key: "D", text: "$10^\\circ$" }
      ],
      correctAnswer: "D",
      explanation: "Định lý: Tổng bốn góc của một tứ giác luôn bằng $360^\\circ$.\n$$\\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B} + \\widehat{C})$$\n$$\\widehat{D} = 360^\\circ - (85^\\circ + 136^\\circ + 129^\\circ) = 360^\\circ - 350^\\circ = 10^\\circ$$."
    },
    {
      id: 8,
      part: "PHẦN I. TRẮC NGHIỆM",
      instruction: "Em chọn một phương án trả lời đúng của mỗi câu hỏi.",
      question: "Bạn Lan đạp xe từ nhà đến trường với vận tốc $10\\text{ km/h}$. Biểu thức biểu thị thời gian (đơn vị: giờ) cần thiết để Lan đi từ nhà đến trường, biết quãng đường dài $x\\text{ (km)}$ là:",
      options: [
        { key: "A", text: "$10x$" },
        { key: "B", text: "$x : 10$" },
        { key: "C", text: "$10 : x$" },
        { key: "D", text: "$x - 10$" }
      ],
      correctAnswer: "B",
      explanation: "Công thức tính thời gian: $t = \\frac{s}{v} = \\frac{x}{10} = x : 10$ (giờ)."
    },
    {
      id: 9,
      part: "PHẦN II. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Thực hiện phép tính và chọn kết quả thu gọn chính xác.",
      question: "Thu gọn biểu thức: $A = (x^2y^2 + xy + x) \\cdot \\left(-\\frac{1}{2}y^3\\right)$",
      options: [
        { key: "A", text: "$-\\frac{1}{2}x^2y^5 - \\frac{1}{2}xy^4 - \\frac{1}{2}xy^3$" },
        { key: "B", text: "$-\\frac{1}{2}x^2y^6 - \\frac{1}{2}xy^3 - \\frac{1}{2}xy$" },
        { key: "C", text: "$\\frac{1}{2}x^2y^5 + \\frac{1}{2}xy^4 + \\frac{1}{2}xy^3$" },
        { key: "D", text: "$-x^2y^5 - xy^4 - xy^3$" }
      ],
      correctAnswer: "A",
      explanation: "Nhân đơn thức với đa thức:\n$$A = x^2y^2 \\cdot \\left(-\\frac{1}{2}y^3\\right) + xy \\cdot \\left(-\\frac{1}{2}y^3\\right) + x \\cdot \\left(-\\frac{1}{2}y^3\\right) = -\\frac{1}{2}x^2y^5 - \\frac{1}{2}xy^4 - \\frac{1}{2}xy^3$$"
    },
    {
      id: 10,
      part: "PHẦN II. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Thực hiện phép tính và chọn kết quả thu gọn chính xác.",
      question: "Kết quả của phép chia đa thức cho đơn thức: $(2x^2y^2 + x^2y + xy) : \\left(-\\frac{1}{3}xy\\right)$ là:",
      options: [
        { key: "A", text: "$-6xy - 3x - 3$" },
        { key: "B", text: "$-6xy + 3x + 3$" },
        { key: "C", text: "$6xy + 3x + 3$" },
        { key: "D", text: "$-2xy - x - 1$" }
      ],
      correctAnswer: "A",
      explanation: "Chia từng hạng tử của đa thức cho đơn thức $-\\frac{1}{3}xy$:\n• $2x^2y^2 : \\left(-\\frac{1}{3}xy\\right) = 2 \\cdot (-3) \\cdot x \\cdot y = -6xy$\n• $x^2y : \\left(-\\frac{1}{3}xy\\right) = 1 \\cdot (-3) \\cdot x = -3x$\n• $xy : \\left(-\\frac{1}{3}xy\\right) = 1 \\cdot (-3) = -3$\nCộng lại ta được: $-6xy - 3x - 3$."
    },
    {
      id: 11,
      part: "PHẦN II. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Tìm x thỏa mãn phương trình.",
      question: "Tìm $x$, biết: $x(3x + 5) - 3x(x - 2) = 1$",
      options: [
        { key: "A", text: "$x = \\frac{1}{11}$" },
        { key: "B", text: "$x = 11$" },
        { key: "C", text: "$x = 1$" },
        { key: "D", text: "$x = -\\frac{1}{11}$" }
      ],
      correctAnswer: "A",
      explanation: "Khai triển vế trái:\n$$3x^2 + 5x - 3x^2 + 6x = 1$$\n$$11x = 1 \\implies x = \\frac{1}{11}$$."
    },
    {
      id: 12,
      part: "PHẦN II. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Tìm x thỏa mãn phương trình.",
      question: "Tìm $x$, biết: $x(2x + 4) + 2(3 - x^2) = 10$",
      options: [
        { key: "A", text: "$x = 1$" },
        { key: "B", text: "$x = 2$" },
        { key: "C", text: "$x = 4$" },
        { key: "D", text: "$x = -1$" }
      ],
      correctAnswer: "A",
      explanation: "Khai triển vế trái:\n$$2x^2 + 4x + 6 - 2x^2 = 10$$\n$$4x + 6 = 10 \\implies 4x = 4 \\implies x = 1$$."
    },
    {
      id: 13,
      part: "PHẦN II. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Giải bài toán thực tế về biểu thức đại số.",
      question: "Có một vòi nước 1 chảy vào bể mỗi phút được $x$ lít. Cùng lúc đó vòi 2 chảy ra mỗi phút $y$ lít ($y < x$). Biểu thức biểu thị số nước có thêm trong bể sau khi mở đồng thời cả hai vòi trong $a$ phút là:",
      options: [
        { key: "A", text: "$a(x - y)$" },
        { key: "B", text: "$a(x + y)$" },
        { key: "C", text: "$ax - y$" },
        { key: "D", text: "$\\frac{x - y}{a}$" }
      ],
      correctAnswer: "A",
      explanation: "Trong 1 phút, lượng nước tăng thêm trong bể là: $x - y$ (lít).\nTrong $a$ phút, số nước có thêm là: $a(x - y)$ (lít)."
    },
    {
      id: 14,
      part: "PHẦN II. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Giải bài toán thực tế về biểu thức đại số.",
      question: "Giả sử sau $a$ phút mở cả 2 vòi (vòi 1 vào $x$ l/ph, vòi 2 ra $y$ l/ph), người ta khoá vòi 2 và tiếp tục để vòi 1 chảy thêm $b$ phút. Tính lượng nước trong bể, biết rằng lúc đầu bể đã chứa sẵn 5 lít nước.",
      options: [
        { key: "A", text: "$5 + a(x - y) + bx$" },
        { key: "B", text: "$5 + a(x + y) + bx$" },
        { key: "C", text: "$5 + ax - by$" },
        { key: "D", text: "$5 + (a + b)(x - y)$" }
      ],
      correctAnswer: "A",
      explanation: "• Ban đầu: 5 lít.\n• Sau $a$ phút mở cả 2 vòi: có thêm $a(x - y)$ lít.\n• Sau $b$ phút chỉ mở vòi 1: có thêm $bx$ lít.\nTổng lượng nước trong bể là: $5 + a(x - y) + bx$ (lít)."
    },
    {
      id: 15,
      part: "PHẦN II. HÌNH HỌC TỰ LUẬN",
      instruction: "Cho hình chữ nhật $ABCD$ có $AB = 2BC$. Gọi $I$ là trung điểm $AB$ và $K$ là trung điểm $DC$.",
      question: "Tứ giác $AIKD$ và $BIKC$ là các hình gì?",
      options: [
        { key: "A", text: "Hình chữ nhật nhưng không phải hình vuông." },
        { key: "B", text: "Hình vuông." },
        { key: "C", text: "Hình thoi không có góc vuông." },
        { key: "D", text: "Hình thang cân." }
      ],
      correctAnswer: "B",
      explanation: "Vì $ABCD$ là hình chữ nhật nên $\\widehat{A} = \\widehat{D} = 90^\\circ$ và $AB // CD, AB = CD$.\n$I, K$ là trung điểm $AB, CD \\implies AI = \\frac{1}{2}AB = BC = AD$.\nTứ giác $AIKD$ có $AI // DK, AI = DK$ nên là hình bình hành. Lại có $\\widehat{A} = 90^\\circ$ và hai cạnh kề $AI = AD$ nên $AIKD$ là hình vuông. Tương tự $BIKC$ cũng là hình vuông."
    }
  ]
};
