// ĐỀ TINH HOA ÔN LUYỆN THI GIỮA HỌC KÌ 1 TOÁN 8 – ĐỀ SỐ 3 (THẦY NGUYỄN ĐÌNH KHIÊM)
window.EXAM_MATH_TINHHOA_3 = {
  id: "toan8_tinhhoa_3",
  title: "ĐỀ TINH HOA GIỮA HỌC KÌ 1 - TOÁN 8 (ĐỀ SỐ 3)",
  subject: "Toán 8",
  durationMinutes: 60,
  author: "Thầy Nguyễn Đình Khiêm - Map EDU",
  description: "Trọn bộ đề thi tinh hoa số 3: Nhận biết đa thức, bậc đơn thức, phép chia đa thức cho đơn thức, hằng đẳng thức lập phương, tính số đo góc tứ giác và các bài toán biến đổi nâng cao.",
  totalQuestions: 16,
  questions: [
    {
      id: 1,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất trong các phương án A, B, C, D.",
      question: "Cho các biểu thức sau: $(5+y^2)\\frac{1}{x}; -\\frac{8}{9}x^2y(2x-3); -\\frac{1}{2}x^2y; 2^2x^3 + \\frac{1}{3}x^3y^4 - x^4z + x^2; 15 + \\frac{1}{z}$. Có bao nhiêu đa thức trong các biểu thức trên?",
      options: [
        { key: "A", text: "2" },
        { key: "B", text: "3" },
        { key: "C", text: "4" },
        { key: "D", text: "5" }
      ],
      correctAnswer: "B",
      explanation: "Đa thức là tổng của những đơn thức (các biến không được nằm ở dưới mẫu số):\n• $(5+y^2)\\frac{1}{x} = \\frac{5+y^2}{x}$: có biến $x$ ở mẫu số nên KHÔNG phải đa thức.\n• $-\\frac{8}{9}x^2y(2x-3) = -\\frac{16}{9}x^3y + \\frac{8}{3}x^2y$: là đa thức.\n• $-\\frac{1}{2}x^2y$: là đơn thức, cũng là đa thức.\n• $2^2x^3 + \\frac{1}{3}x^3y^4 - x^4z + x^2$: là đa thức.\n• $15 + \\frac{1}{z}$: có biến $z$ ở mẫu số nên KHÔNG phải đa thức.\nVậy có tất cả 3 đa thức."
    },
    {
      id: 2,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Bậc của biểu thức $A = 2x^2y \\cdot 5xy^3$ là:",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "6" },
        { key: "C", text: "7" },
        { key: "D", text: "8" }
      ],
      correctAnswer: "C",
      explanation: "Thu gọn đơn thức $A$:\n$$A = (2 \\cdot 5) \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^3) = 10x^3y^4$$\nBậc của đơn thức là tổng số mũ của tất cả các biến: $3 + 4 = 7$."
    },
    {
      id: 3,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Kết quả của phép chia $5x^2y^5 : 10x^2y^3$ là:",
      options: [
        { key: "A", text: "$\\frac{1}{2}y^2$" },
        { key: "B", text: "$\\frac{1}{2}xy^3$" },
        { key: "C", text: "$50x^4y^8$" },
        { key: "D", text: "$y^4$" }
      ],
      correctAnswer: "A",
      explanation: "$$5x^2y^5 : 10x^2y^3 = \\frac{5}{10} \\cdot (x^2 : x^2) \\cdot (y^5 : y^3) = \\frac{1}{2} \\cdot 1 \\cdot y^2 = \\frac{1}{2}y^2$$."
    },
    {
      id: 4,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Điều kiện của số tự nhiên $n$ để phép chia $(4x^{10}y - xy^7 + x^5y^4) : 2x^n y^n$ là phép chia hết là:",
      options: [
        { key: "A", text: "$n = 0$" },
        { key: "B", text: "$n = 1$" },
        { key: "C", text: "$n = 5$" },
        { key: "D", text: "$n \\in \\{0; 1\\}$" }
      ],
      correctAnswer: "D",
      explanation: "Đa thức chia hết cho đơn thức khi từng hạng tử đều chia hết:\n• Hạng tử $4x^{10}y$: số mũ của $y$ là 1 $\\implies n \\le 1$\n• Hạng tử $-xy^7$: số mũ của $x$ là 1 $\\implies n \\le 1$\nVì $n$ là số tự nhiên và $n \\le 1$ nên $n \\in \\{0; 1\\}$."
    },
    {
      id: 5,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khẳng định nào sau đây là SAI?",
      options: [
        { key: "A", text: "$(x + y)^2 = x^2 + 2xy + y^2$" },
        { key: "B", text: "$(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$" },
        { key: "C", text: "$x^3 - y^3 = (x - y)(x^2 + xy + y^2)$" },
        { key: "D", text: "$(x - y)^3 = x^3 - y^3$" }
      ],
      correctAnswer: "D",
      explanation: "Công thức đúng là $(x - y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$, không phải $x^3 - y^3$. Do đó D là khẳng định sai."
    },
    {
      id: 6,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khai triển $(2x - 3)^2$ ta được:",
      options: [
        { key: "A", text: "$2x^2 - 12x + 9$" },
        { key: "B", text: "$2x^2 + 12x + 9$" },
        { key: "C", text: "$4x^2 - 12x + 9$" },
        { key: "D", text: "$4x^2 - 6x + 9$" }
      ],
      correctAnswer: "C",
      explanation: "$$(2x - 3)^2 = (2x)^2 - 2\\cdot (2x)\\cdot 3 + 3^2 = 4x^2 - 12x + 9$$."
    },
    {
      id: 7,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Trong các khẳng định sau, khẳng định nào ĐÚNG?",
      options: [
        { key: "A", text: "Tứ giác có 4 cạnh, 2 đường chéo, 4 đỉnh và 4 góc." },
        { key: "B", text: "Tứ giác có 4 cạnh, 3 đường chéo, 4 đỉnh và 4 góc." },
        { key: "C", text: "Tứ giác có 4 cạnh, 4 đường chéo, 4 đỉnh và 4 góc." },
        { key: "D", text: "Tứ giác có 4 cạnh, 1 đường chéo, 4 đỉnh và 4 góc." }
      ],
      correctAnswer: "A",
      explanation: "Một tứ giác bất kì luôn có 4 đỉnh, 4 cạnh, 4 góc trong và đúng 2 đường chéo."
    },
    {
      id: 8,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khẳng định nào sau đây là SAI?",
      options: [
        { key: "A", text: "Tứ giác lồi là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kỳ cạnh nào của tứ giác." },
        { key: "B", text: "Tổng các góc của một tứ giác bằng $180^\\circ$." },
        { key: "C", text: "Tổng các góc của một tứ giác bằng $360^\\circ$." },
        { key: "D", text: "Tứ giác ABCD là hình gồm 4 đoạn thẳng trong đó bất kì hai đoạn thẳng nào cũng không cùng nằm trên một đường thẳng." }
      ],
      correctAnswer: "B",
      explanation: "Tổng 4 góc trong của một tứ giác bằng $360^\\circ$, không phải $180^\\circ$ ($180^\\circ$ là tổng 3 góc của một tam giác). Do đó B là khẳng định sai."
    },
    {
      id: 9,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Cho tứ giác $ABCD$ có $\\widehat{C} = 60^\\circ, \\widehat{D} = 80^\\circ, \\widehat{A} - \\widehat{B} = 10^\\circ$. Số đo của góc $A$ là:",
      options: [
        { key: "A", text: "$95^\\circ$" },
        { key: "B", text: "$115^\\circ$" },
        { key: "C", text: "$105^\\circ$" },
        { key: "D", text: "$125^\\circ$" }
      ],
      correctAnswer: "B",
      explanation: "Tổng 4 góc bằng $360^\\circ$:\n$$\\widehat{A} + \\widehat{B} = 360^\\circ - (\\widehat{C} + \\widehat{D}) = 360^\\circ - (60^\\circ + 80^\\circ) = 220^\\circ$$\nTa có bài toán tìm hai số khi biết tổng và hiệu:\n$$\\widehat{A} = \\frac{(\\widehat{A} + \\widehat{B}) + (\\widehat{A} - \\widehat{B})}{2} = \\frac{220^\\circ + 10^\\circ}{2} = \\frac{230^\\circ}{2} = 115^\\circ$$."
    },
    {
      id: 10,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Hình bình hành $ABCD$ là hình chữ nhật khi:",
      options: [
        { key: "A", text: "$AB = AD$" },
        { key: "B", text: "$\\widehat{A} = 90^\\circ$" },
        { key: "C", text: "$AB = 2AC$" },
        { key: "D", text: "$\\widehat{A} = \\widehat{C}$" }
      ],
      correctAnswer: "B",
      explanation: "Dấu hiệu nhận biết hình chữ nhật: Hình bình hành có một góc vuông là hình chữ nhật ($\\widehat{A} = 90^\\circ$)."
    },
    {
      id: 11,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Để chứng minh tứ giác $ABCD$ là hình vuông, dấu hiệu nào sau đây là SAI?",
      options: [
        { key: "A", text: "Tứ giác $ABCD$ là hình thoi có hai đường chéo bằng nhau." },
        { key: "B", text: "Tứ giác $ABCD$ là hình thoi có một góc vuông." },
        { key: "C", text: "Tứ giác $ABCD$ là hình thoi có hai đường chéo vuông góc." },
        { key: "D", text: "Tứ giác $ABCD$ là hình chữ nhật có hai đường chéo vuông góc." }
      ],
      correctAnswer: "C",
      explanation: "Hình thoi vốn dĩ luôn có hai đường chéo vuông góc với nhau, đây là tính chất sẵn có của hình thoi nên không thể dùng để kết luận nó là hình vuông! Muốn thành hình vuông, hình thoi cần có thêm 1 góc vuông hoặc 2 đường chéo bằng nhau."
    },
    {
      id: 12,
      part: "PHẦN 2. ĐÚNG SAI",
      instruction: "Cho hai đa thức $A = x^2y + 5xy - 1$ và $B = 3y(3y - x) + (-2x^2y^2 - 6xy^3 + 4xy) : \\frac{2}{3}xy$.",
      question: "Bậc của đa thức $A$ là bao nhiêu?",
      options: [
        { key: "A", text: "Bậc 3" },
        { key: "B", text: "Bậc 2" },
        { key: "C", text: "Bậc 1" },
        { key: "D", text: "Bậc 4" }
      ],
      correctAnswer: "A",
      explanation: "Hạng tử $x^2y$ có bậc là $2 + 1 = 3$. Hạng tử $5xy$ có bậc $1 + 1 = 2$. Bậc của đa thức $A$ là 3."
    },
    {
      id: 13,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Thực hiện phép tính đại số.",
      question: "Cho hai số $x, y$ thỏa mãn $x - y = 5$ và $xy = 3$. Tính giá trị của biểu thức $x^2 + y^2$:",
      options: [
        { key: "A", text: "31" },
        { key: "B", text: "19" },
        { key: "C", text: "25" },
        { key: "D", text: "34" }
      ],
      correctAnswer: "A",
      explanation: "Biến đổi theo hằng đẳng thức:\n$$x^2 + y^2 = (x - y)^2 + 2xy$$\nThay $x - y = 5$ và $xy = 3$ vào:\n$$x^2 + y^2 = 5^2 + 2 \\cdot 3 = 25 + 6 = 31$$."
    },
    {
      id: 14,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính số đo góc tứ giác.",
      question: "Tứ giác $ABCD$ có $\\widehat{C} = 50^\\circ, \\widehat{D} = 60^\\circ$ và $\\widehat{A} : \\widehat{B} = 3 : 2$. Tính giá trị $2\\widehat{A} - \\widehat{B}$ (đơn vị: độ):",
      options: [
        { key: "A", text: "$200^\\circ$" },
        { key: "B", text: "$150^\\circ$" },
        { key: "C", text: "$180^\\circ$" },
        { key: "D", text: "$120^\\circ$" }
      ],
      correctAnswer: "A",
      explanation: "Tổng bốn góc bằng $360^\\circ$:\n$$\\widehat{A} + \\widehat{B} = 360^\\circ - (50^\\circ + 60^\\circ) = 250^\\circ$$\nVì $\\frac{\\widehat{A}}{3} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{A} + \\widehat{B}}{3 + 2} = \\frac{250^\\circ}{5} = 50^\\circ$\nSuy ra $\\widehat{A} = 3 \\cdot 50^\\circ = 150^\\circ$ và $\\widehat{B} = 2 \\cdot 50^\\circ = 100^\\circ$.\nVậy: $2\\widehat{A} - \\widehat{B} = 2 \\cdot 150^\\circ - 100^\\circ = 300^\\circ - 100^\\circ = 200^\\circ$."
    },
    {
      id: 15,
      part: "PHẦN 4. TỰ LUẬN TRẮC NGHIỆM HÓA",
      instruction: "Phân tích đa thức thành nhân tử.",
      question: "Phân tích đa thức thành nhân tử: $10x^2(2x - y) + 6xy(y - 2x)$",
      options: [
        { key: "A", text: "$2x(2x - y)(5x - 3y)$" },
        { key: "B", text: "$2x(2x - y)(5x + 3y)$" },
        { key: "C", text: "$x(2x - y)(10x - 6y)$" },
        { key: "D", text: "$-2x(2x - y)(5x - 3y)$" }
      ],
      correctAnswer: "A",
      explanation: "Đổi dấu: $6xy(y - 2x) = -6xy(2x - y)$:\n$$= 10x^2(2x - y) - 6xy(2x - y) = (2x - y)(10x^2 - 6xy) = 2x(2x - y)(5x - 3y)$$."
    },
    {
      id: 16,
      part: "PHẦN 4. TỰ LUẬN HÌNH HỌC",
      instruction: "Cho hình bình hành $ABCD$ có cạnh $AB = 2AD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.",
      question: "Tứ giác $DMBN$ là hình gì?",
      options: [
        { key: "A", text: "Hình bình hành." },
        { key: "B", text: "Hình thoi." },
        { key: "C", text: "Hình chữ nhật." },
        { key: "D", text: "Hình thang vuông." }
      ],
      correctAnswer: "A",
      explanation: "Vì $ABCD$ là hình bình hành nên $AB // CD$ và $AB = CD$.\n$M, N$ lần lượt là trung điểm của $AB, CD$ nên $MB = \\frac{1}{2}AB = \\frac{1}{2}CD = DN$.\nLại có $MB // DN$ (vì $M \\in AB, N \\in CD$).\nTứ giác $DMBN$ có một cặp cạnh đối song song và bằng nhau ($MB // DN, MB = DN$) nên $DMBN$ là HÌNH BÌNH HÀNH."
    }
  ]
};
