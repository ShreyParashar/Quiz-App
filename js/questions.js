// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 6,
    question: "In HTML, what does the <a> tag represent?",
    answer: "Hyperlink",
    options: [
      "Image",
      "Hyperlink",
      "Heading",
      "Paragraph"
    ]
  },
  {
    numb: 7,
    question: "How can you include an external CSS file in an HTML document?",
    answer: "<link rel='stylesheet' href='styles.css'>",
    options: [
      "<link rel='stylesheet' href='styles.css'>",
      "<style src='styles.css'></style>",
      "<script src='styles.css'></script>",
      "<css src='styles.css'></css>"
    ]
  },
  {
    numb: 8,
    question: "What is the purpose of the 'id' attribute in HTML?",
    answer: "Uniquely identifies an element",
    options: [
      "Defines the class of an element",
      "Uniquely identifies an element",
      "Specifies the element's position on the page",
      "Sets the background color of an element"
    ]
  },
  {
    numb: 9,
    question: "How do you declare a variable in PHP?",
    answer: "$variableName = value;",
    options: [
      "var variableName = value;",
      "$variableName = value;",
      "int variableName = value;",
      "set variableName = value;"
    ]
  },
  {
    numb: 10,
    question: "What is the difference between GET and POST methods in PHP?",
    answer: "GET appends data to the URL, while POST sends data in the request body",
    options: [
      "GET sends data in the request body, while POST appends data to the URL",
      "GET and POST methods are identical in PHP",
      "GET appends data to the URL, while POST sends data in the request body",
      "GET is used for submitting forms, while POST is used for retrieving data"
    ]
  },
  {
    numb: 11,
    question: "What is the purpose of the SELECT statement in SQL?",
    answer: "Retrieve data from a database",
    options: [
      "Create a new table",
      "Update existing records",
      "Delete records from a database",
      "Retrieve data from a database"
    ]
  },
  {
    numb: 12,
    question: "How do you create a table in SQL?",
    answer: "CREATE TABLE table_name (column1 datatype, column2 datatype, ...)",
    options: [
      "ALTER TABLE table_name ADD COLUMN column_name datatype",
      "CREATE TABLE table_name (column1 datatype, column2 datatype, ...)",
      "INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)",
      "DROP TABLE table_name"
    ]
  },
  {
    numb: 13,
    question: "What is the purpose of the <div> tag in HTML?",
    answer: "Group elements together",
    options: [
      "Define a hyperlink",
      "Represent an image",
      "Create a form",
      "Group elements together"
    ]
  },
  {
    numb: 14,
    question: "How do you style an element using CSS?",
    answer: "selector { property: value; }",
    options: [
      "element { property: value; }",
      "class { property: value; }",
      "selector { property: value; }",
      "style { property: value; }"
    ]
  },
  {
    numb: 15,
    question: "What is the purpose of the XML declaration at the beginning of an XML document?",
    answer: "Identify the XML version and encoding",
    options: [
      "Specify the root element of the XML document",
      "Define the DTD (Document Type Definition)",
      "Identify the XML version and encoding",
      "Link an external XML schema"
    ]
  }
];