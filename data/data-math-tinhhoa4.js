// ĐỀ TINH HOA ÔN LUYỆN THI GIỮA HỌC KÌ 1 TOÁN 8 – ĐỀ SỐ 4 (THẦY NGUYỄN ĐÌNH KHIÊM)
window.EXAM_MATH_TINHHOA_4 = {
  id: "toan8_tinhhoa_4",
  title: "ĐỀ TINH HOA GIỮA HỌC KÌ 1 - TOÁN 8 (ĐỀ SỐ 4)",
  subject: "Toán 8",
  durationMinutes: 60,
  author: "Thầy Nguyễn Đình Khiêm - Map EDU",
  description: "Trọn bộ đề thi tinh hoa số 4: Hệ số đơn thức, thu gọn đa thức nhiều biến, hiệu hai bình phương, bình phương một hiệu, tính chất đường chéo và góc các hình tứ giác đặc biệt.",
  totalQuestions: 16,
  questions: [
    {
      id: 1,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất trong các phương án A, B, C, D.",
      question: "Đơn thức $-36a^2b^2x^2y^3$ (với $a, b$ là hằng số) có hệ số là:",
      options: [
        { key: "A", text: "$-36a^2b^2$" },
        { key: "B", text: "$-36$" },
        { key: "C", text: "$36a^2b^2$" },
        { key: "D", text: "$-36a^2$" }
      ],
      correctAnswer: "A",
      explanation: "Vì $a, b$ là các hằng số nên hệ số của đơn thức bao gồm toàn bộ phần hằng số đi liền trước các biến $x, y$: đó là $-36a^2b^2$."
    },
    {
      id: 2,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Cho đơn thức $3^2x^2y^4$. Đơn thức nào dưới đây đồng dạng với đơn thức đã cho?",
      options: [
        { key: "A", text: "$-3^2x^4y^2$" },
        { key: "B", text: "$7x^2y^4$" },
        { key: "C", text: "$\\frac{1}{3}x^6$" },
        { key: "D", text: "$-9x^4y^6$" }
      ],
      correctAnswer: "B",
      explanation: "Đơn thức $3^2x^2y^4$ có phần biến là $x^2y^4$. Đơn thức $7x^2y^4$ có cùng phần biến $x^2y^4$ nên hai đơn thức này đồng dạng với nhau."
    },
    {
      id: 3,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Kết quả của phép chia $5x^2y^5 : 10x^2y^3$ là:",
      options: [
        { key: "A", text: "$y^4$" },
        { key: "B", text: "$\\frac{1}{2}xy^3$" },
        { key: "C", text: "$50x^4y^8$" },
        { key: "D", text: "$\\frac{1}{2}y^2$" }
      ],
      correctAnswer: "D",
      explanation: "$$5x^2y^5 : 10x^2y^3 = \\frac{5}{10} \\cdot (x^2 : x^2) \\cdot (y^5 : y^3) = \\frac{1}{2}y^2$$."
    },
    {
      id: 4,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Thu gọn đa thức $Q = (x^2 + y^2 + z^2) + (x^2 - y^2 + z^2) + (x^2 + y^2 - z^2)$ được kết quả là:",
      options: [
        { key: "A", text: "$Q = 3x^2 + 3y^2 + 3z^2$" },
        { key: "B", text: "$Q = x^2 + y^2 + z^2$" },
        { key: "C", text: "$Q = 3x^2 + y^2 + z^2$" },
        { key: "D", text: "$Q = 3x^2 - y^2 - z^2$" }
      ],
      correctAnswer: "C",
      explanation: "Nhóm các hạng tử đồng dạng:\n$$Q = (x^2 + x^2 + x^2) + (y^2 - y^2 + y^2) + (z^2 + z^2 - z^2) = 3x^2 + y^2 + z^2$$."
    },
    {
      id: 5,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khai triển biểu thức $4x^2 - 25y^2$ theo hằng đẳng thức ta được:",
      options: [
        { key: "A", text: "$(4x - 5y)(4x + 5y)$" },
        { key: "B", text: "$(4x - 25y)(4x + 25y)$" },
        { key: "C", text: "$(2x - 5y)(2x + 5y)$" },
        { key: "D", text: "$(2x - 5y)^2$" }
      ],
      correctAnswer: "C",
      explanation: "Áp dụng hiệu hai bình phương $A^2 - B^2 = (A - B)(A + B)$ với $A = 2x, B = 5y$:\n$$4x^2 - 25y^2 = (2x)^2 - (5y)^2 = (2x - 5y)(2x + 5y)$$."
    },
    {
      id: 6,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Khai triển $(x - 7)^2$ ta được:",
      options: [
        { key: "A", text: "$x^2 - 2x + 7$" },
        { key: "B", text: "$x^2 - 2x + 49$" },
        { key: "C", text: "$x^2 - 14x + 7$" },
        { key: "D", text: "$x^2 - 14x + 49$" }
      ],
      correctAnswer: "D",
      explanation: "$$(x - 7)^2 = x^2 - 2\\cdot x\\cdot 7 + 7^2 = x^2 - 14x + 49$$."
    },
    {
      id: 7,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Trong một tứ giác, đường chéo là:",
      options: [
        { key: "A", text: "đoạn thẳng nối hai đỉnh đối nhau." },
        { key: "B", text: "đoạn thẳng nối hai đỉnh kề nhau." },
        { key: "C", text: "đoạn thẳng nối hai cạnh đối nhau." },
        { key: "D", text: "đoạn thẳng nối hai cạnh kề nhau." }
      ],
      correctAnswer: "A",
      explanation: "Theo định nghĩa: Đường chéo của tứ giác là đoạn thẳng nối hai đỉnh đối diện nhau (không kề nhau)."
    },
    {
      id: 8,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Cho tứ giác $ABCD$ có $\\widehat{A} + \\widehat{B} = 140^\\circ$. Khi đó $\\widehat{C} + \\widehat{D}$ bằng:",
      options: [
        { key: "A", text: "$200^\\circ$" },
        { key: "B", text: "$220^\\circ$" },
        { key: "C", text: "$160^\\circ$" },
        { key: "D", text: "$130^\\circ$" }
      ],
      correctAnswer: "B",
      explanation: "Tổng bốn góc của tứ giác luôn bằng $360^\\circ$:\n$$\\widehat{C} + \\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B}) = 360^\\circ - 140^\\circ = 220^\\circ$$."
    },
    {
      id: 9,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Tứ giác có hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường là:",
      options: [
        { key: "A", text: "hình thang cân." },
        { key: "B", text: "hình chữ nhật." },
        { key: "C", text: "hình bình hành." },
        { key: "D", text: "hình thoi." }
      ],
      correctAnswer: "B",
      explanation: "• Hai đường chéo cắt nhau tại trung điểm mỗi đường $\\implies$ là hình bình hành.\n• Hình bình hành có 2 đường chéo bằng nhau $\\implies$ là HÌNH CHỮ NHẬT."
    },
    {
      id: 10,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Trong các hình sau, các hình nào có hai đường chéo vuông góc với nhau?",
      options: [
        { key: "A", text: "Hình chữ nhật, hình bình hành, hình thoi." },
        { key: "B", text: "Hình bình hành, hình vuông, hình chữ nhật." },
        { key: "C", text: "Hình thoi, hình vuông." },
        { key: "D", text: "Hình thang cân, hình chữ nhật." }
      ],
      correctAnswer: "C",
      explanation: "Hai hình luôn có tính chất hai đường chéo vuông góc với nhau là Hình thoi và Hình vuông."
    },
    {
      id: 11,
      part: "PHẦN 1. TRẮC NGHIỆM LỰA CHỌN",
      instruction: "Hãy chọn phương án đúng nhất.",
      question: "Hình thoi KHÔNG CÓ tính chất nào dưới đây?",
      options: [
        { key: "A", text: "Hai đường chéo cắt nhau tại trung điểm của mỗi đường." },
        { key: "B", text: "Hai đường chéo bằng nhau." },
        { key: "C", text: "Hai đường chéo là các đường phân giác của các góc của hình thoi." },
        { key: "D", text: "Hai đường chéo vuông góc với nhau." }
      ],
      correctAnswer: "B",
      explanation: "Hai đường chéo của hình thoi nói chung không bằng nhau (chỉ bằng nhau khi nó là hình vuông). Do đó khẳng định B là sai."
    },
    {
      id: 12,
      part: "PHẦN 2. ĐÚNG SAI",
      instruction: "Cho đa thức $A = 3x^2y - 2xy^2 - 4xy + 1$.",
      question: "Tính giá trị của đa thức $A$ tại $x = -1, y = 1$:",
      options: [
        { key: "A", text: "10" },
        { key: "B", text: "9" },
        { key: "C", text: "-2" },
        { key: "D", text: "6" }
      ],
      correctAnswer: "A",
      explanation: "Thay $x = -1, y = 1$ vào đa thức $A$:\n$$A = 3(-1)^2(1) - 2(-1)(1)^2 - 4(-1)(1) + 1$$\n$$A = 3(1)(1) + 2(1) + 4 + 1 = 3 + 2 + 4 + 1 = 10$$."
    },
    {
      id: 13,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tìm số nghiệm của phương trình.",
      question: "Có bao nhiêu giá trị của $x$ thỏa mãn $12x^3 - 27x = 0$?",
      options: [
        { key: "A", text: "3 giá trị" },
        { key: "B", text: "2 giá trị" },
        { key: "C", text: "1 giá trị" },
        { key: "D", text: "Vô số" }
      ],
      correctAnswer: "A",
      explanation: "Đặt nhân tử chung $3x$ ra ngoài:\n$$3x(4x^2 - 9) = 0 \\implies 3x(2x - 3)(2x + 3) = 0$$\n$$\\implies x = 0 \\quad \\text{hoặc} \\quad x = \\frac{3}{2} \\quad \\text{hoặc} \\quad x = -\\frac{3}{2}$$\nVậy có đúng 3 giá trị của $x$ thỏa mãn."
    },
    {
      id: 14,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính số đo góc tứ giác.",
      question: "Cho tứ giác $ABCD$ có $\\widehat{A} = 50^\\circ, \\widehat{B} = 130^\\circ, \\widehat{C} = 80^\\circ$. Tính số đo của góc $D$ (đơn vị: độ):",
      options: [
        { key: "A", text: "$100^\\circ$" },
        { key: "B", text: "$80^\\circ$" },
        { key: "C", text: "$90^\\circ$" },
        { key: "D", text: "$110^\\circ$" }
      ],
      correctAnswer: "A",
      explanation: "$$\\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B} + \\widehat{C}) = 360^\\circ - (50^\\circ + 130^\\circ + 80^\\circ) = 360^\\circ - 260^\\circ = 100^\\circ$$."
    },
    {
      id: 15,
      part: "PHẦN 3. TRẢ LỜI NGẮN",
      instruction: "Tính số đo góc hình thang cân.",
      question: "Hình thang cân $ABCD$ ($AB // CD$) có $\\widehat{C} = 60^\\circ$. Tính giá trị $\\widehat{A} - \\widehat{C}$ (đơn vị: độ):",
      options: [
        { key: "A", text: "$60^\\circ$" },
        { key: "B", text: "$30^\\circ$" },
        { key: "C", text: "$90^\\circ$" },
        { key: "D", text: "$120^\\circ$" }
      ],
      correctAnswer: "A",
      explanation: "Vì $AB // CD$ nên hai góc trong cùng phía bù nhau:\n$$\\widehat{A} + \\widehat{D} = 180^\\circ$$\nDo $ABCD$ là hình thang cân nên $\\widehat{D} = \\widehat{C} = 60^\\circ$.\n$$\\implies \\widehat{A} = 180^\\circ - 60^\\circ = 120^\\circ$$\nVậy $\\widehat{A} - \\widehat{C} = 120^\\circ - 60^\\circ = 60^\\circ$."
    },
    {
      id: 16,
      part: "PHẦN 4. TỰ LUẬN HÌNH HỌC",
      instruction: "Cho tam giác $ABC$ vuông tại $A$, đường trung tuyến $AM$. Gọi $D$ là trung điểm của $AB$, $E$ là điểm đối xứng của $M$ qua $D$.",
      question: "Tứ giác $AEBM$ là hình gì?",
      options: [
        { key: "A", text: "Hình thoi." },
        { key: "B", text: "Hình chữ nhật." },
        { key: "C", text: "Hình vuông." },
        { key: "D", text: "Hình thang cân." }
      ],
      correctAnswer: "A",
      explanation: "• Vì $D$ là trung điểm của $AB$ và $D$ là trung điểm của $EM$ (do $E$ đối xứng với $M$ qua $D$), nên tứ giác $AEBM$ có hai đường chéo cắt nhau tại trung điểm mỗi đường $\\implies AEBM$ là hình bình hành.\n• Mặt khác, trong tam giác vuông $ABC$, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = \\frac{1}{2}BC = MB$.\n• Hình bình hành $AEBM$ có hai cạnh kề bằng nhau ($AM = MB$) nên $AEBM$ là HÌNH THOI."
    }
  ]
};
