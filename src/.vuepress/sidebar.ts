import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/fullstack/java/": [
        {
            text: "Java基础总结",
            icon: "java",
            prefix: "base/",
            collapsible: true,
            children: [
                "OOP编程",
                "Java基础知识",
                "Java泛型机制详解",
                "Java注解机制详解",
                "Java异常机制详解",
                "Java反射机制详解",
                "Java SPI机制详解"
            ],
        },
        {
            text: "Java集合框架总结",
            icon: "java",
            prefix: "collection/",
            collapsible: true,
            children: [
                "Collection-知识体系详解.md",
                {
                    text: "Collection集合",
                    icon: "star",
                    collapsible: true,
                    children: [
                        "Collection-ArrayList源码详解.md",
                        "Collection-LinkedList源码详解.md",
                        "Collection-PriorityQueue源码详解.md",
                        "Collection-Queue&Stack源码详解.md"
                    ],
                },
                {
                    text: "Map集合",
                    icon: "star",
                    collapsible: true,
                    children: [
                        "HashMap&HashSet源码详解.md",
                        "LinkedHashMap&LinkedHashSet源码详解.md",
                        "TreeMap&TreeSet源码详解.md",
                        "WeakHashMap源码详解.md"
                    ],
                },
            ],
        },
        {
            text: "Java并发框架总结",
            icon: "java",
            prefix: "concurrency/",
            collapsible: true,
            children: ["Java并发理论总结", "Java并发线程总结", "JUC并发编程总结"],
        },
        {
            text: "IO流知识总结",
            icon: "java",
            prefix: "io/",
            collapsible: true,
            children: ["IO流体系知识总结"],
        },
        {
            text: "JVM虚拟机知识总结",
            icon: "java",
            prefix: "jvm/",
            collapsible: true,
            children: ["Java类加载机知识制总结", "JVM内存结构知识总结", "JVM垃圾回收基础知识总结"],
        }

    ],
    "/interview/": [
        {
            text: "面试准备（必看）",
            prefix: "preparation/",
            collapsible: true,
            children: [""],
        },
        {
            text: "Java面试题",
            icon: "java",
            prefix: "javabase/",
            collapsible: true,
            children: [""],
        }, {
            text: "数据库面试题",
            icon: "database",
            prefix: "database/",
            collapsible: true,
            children: [""],
        },
        {
            text: "中间件面试题",
            prefix: "middleware/",
            collapsible: true,
            children: [""],
        },
        {
            text: "架构面试题",
            prefix: "architecture/",
            collapsible: true,
            children: [""],
        },
        {
            text: "项目运维面试题",
            prefix: "devops/",
            collapsible: true,
            children: [""],
        },
        {
            text: "项目面试题",
            prefix: "project/",
            collapsible: true,
            children: [""],
        },
    ],
    "/fullstack/framework/": [
        {
            text: "Spring框架学习指南",
            prefix: "spring/",
            collapsible: true,
            children: ["Spring基础", "Spring进阶", "Spring源码分析"],
        }
    ],
    "/fullstack/middleware/": [
        {
            text: "kafka消息中间件学习指南",
            prefix: "kafka/",
            collapsible: true,
            children: ["Kafka消息中间件知识总结"],
        }
    ],
    "/fullstack/database/": [
        {
            text: "mysql学习指南",
            prefix: "mysql/",
            collapsible: true,
            children: ["mysql基础", "mysql进阶"],
        }
    ],
    "/fullstack/devops/": [
        {
            text: "k8s学习指南",

            prefix: "k8s/",
            collapsible: true,
            children: ["K8s体系知识"],
        }
    ],
    "/fullstack/architecture/": [
        {
            text: "架构体系知识",

            prefix: "base/",
            collapsible: true,
            children: ["架构基础理论知识"],
        }
    ]
});
