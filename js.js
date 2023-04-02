let advice = {
    0: "Do not give up and make your research every time",
    1: "Start with a solid foundation in programming concepts like variables, data types, loops, and conditional statements",
    2: "Learn at least one programming language in depth before moving on to others",
    3: "Use version control, like Git, from the beginning of your projects",
    4: "Practice problem-solving with coding challenges and exercises",
    5: "Collaborate with other developers to learn from their code and techniques",
    6: "Learn how to use the command line for tasks like running programs and managing files",
    7: "Focus on writing clean and readable code",
    8: "Use comments to explain your code and make it easier to understand for others",
    9: "Write unit tests to ensure your code works as expected",
    10: "Keep learning and stay up-to-date with new technologies and programming languages",
    11: "Don't be afraid to ask for help or seek out mentors",
    12: "Learn how to use a debugger to troubleshoot errors in your code",
    13: "Take advantage of online resources like tutorials, documentation, and forums",
    14: "Use a code editor that supports syntax highlighting and auto-completion",
    15: "Follow coding standards and best practices for the language and frameworks you are using",
    16: "Write reusable code by breaking it down into functions or modules",
    17: "Use a code linter to catch common errors and maintain consistency in your code",
    18: "Learn about object-oriented programming concepts like classes and inheritance",
    19: "Document your code using a tool like Javadoc or Sphinx",
    20: "Understand the basics of web development, including HTML, CSS, and JavaScript",
    21: "Experiment with different programming paradigms, such as functional programming or reactive programming",
    22: "Familiarize yourself with database concepts and SQL",
    23: "Learn how to debug asynchronous code and handle errors gracefully",
    24: "Use design patterns to solve common programming problems",
    25: "Learn how to deploy your code to a server or cloud platform",
    26: "Stay organized with project management tools like Trello or Asana",
    27: "Practice code reviews to get feedback on your code from other developers",
    28: "Participate in online coding communities to connect with other developers and share knowledge",
    29: "Learn how to optimize your code for performance",
    30: "Experiment with different programming languages and frameworks to expand your skills",
    31: "Understand the basics of network protocols and APIs",
    32: "Learn how to work with APIs to integrate external services into your applications",
    33: "Keep your code and development environment up-to-date with security patches and updates",
    34: "Learn how to write secure code to protect against attacks like cross-site scripting (XSS) and SQL injection",
    35: "Understand the basics of DevOps and continuous integration/continuous deployment (CI/CD) pipelines",
    36: "Practice good code hygiene, like closing file handles and freeing memory when you're done with them",
    37: "Learn how to use profiling tools to identify performance bottlenecks in your code",
    38: "Understand the basics of data structures like arrays, linked lists, and hash tables",
    39: "Learn how to work with third-party libraries and frameworks",
    40: "Familiarize yourself with cloud platforms like AWS, Azure, and Google Cloud Platform",
    41: "Use code generators and scaffolding tools to speed up your development process",
    42: "Learn how to work with distributed systems and microservices architectures",
    43: "Understand the basics of machine learning and data analysis",
    44: "Practice pair programming to learn from other developers and improve your skills",
    45: "Learn how to build scalable and fault-tolerant applications",
    46: "Use code coverage tools to measure the effectiveness of your unit tests",
    47: "Understand the basics of containerization and orchestration tools like Docker and Kubernetes",
    48: "Learn how to work with different types of data stores, like NoSQL databases and graph databases",

};

let currentIndex = 0;

function generateAdvice() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * 48);
    } while (newIndex === currentIndex);

    currentIndex = newIndex;

    document.getElementById("advice").innerHTML = advice[currentIndex];
    document.getElementById("num").innerHTML = "Advice #" + currentIndex;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % 48;
        document.getElementById("advice").innerHTML = advice[currentIndex];
        document.getElementById("num").innerHTML = "Advice #" + currentIndex;
    } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex + 48) % 49;
        document.getElementById("advice").innerHTML = advice[currentIndex];
        document.getElementById("num").innerHTML = "Advice #" + currentIndex;
    }
});

document.getElementById("dicebg").addEventListener("click", generateAdvice);