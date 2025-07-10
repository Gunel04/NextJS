import { NextRequest } from "next/server";

interface BlogDataTypes {
    id: number | string,
    title: string,
    description: string,
    image : string,
    date: string,
    slug : string
}

export async function GET(request: NextRequest) {
    const blogData:BlogDataTypes[] = [
        {
            id: 1,
            title: "Our Strength, Your Business",
            description: "In today’s fast-paced digital era, businesses need more than just a product or service—they need a reliable partner with the strength to support their ambitions. At the heart of every successful business lies a strong foundation, and our strength is built on years of experience, innovative strategies, and a commitment to client success. This blog explores how our expertise, infrastructure, and customer-centric approach can empower your business to thrive in a competitive landscape. Whether you're a startup looking for guidance or an established company seeking growth, we offer the tools and knowledge to support your journey. From scalable solutions to dedicated support, our strength becomes your advantage. Dive in to discover real-world examples, client success stories, and insights into how strategic partnerships drive progress. Because when your business wins, we win together.",
            image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img1.jpg",
            date: "June 15, 2025",
            slug: "Our strength, your business"
        },
        {
            id: 2,
            title: "How's The Economy",
            description: '“How’s the economy?” It’s a question that sparks conversations in boardrooms, homes, and headlines across the globe. In this blog, we take a deep dive into the current state of the economy, exploring trends, data, and expert analysis to help you make informed decisions. From inflation and interest rates to global supply chains and employment figures, we unpack the key indicators that shape financial markets and business operations. Whether you’re an entrepreneur, investor, or simply curious about economic shifts, this article breaks down complex topics into digestible insights. Learn how economic forces affect consumer behavior, digital innovation, and even your daily expenses. Stay ahead of the curve with forward-looking forecasts, risk assessments, and strategies for economic resilience. Let’s explore not just how the economy is doing—but how you can adapt and thrive in it.',
            image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img2.jpg",
            date: "June 22, 2025",
            slug: "How's the economy"
        },
        {
            id: 3,
            title: "Empowering Ideas, Transforming Futures",
            description: "Innovation starts with an idea—but turning that idea into real-world impact requires vision, courage, and action. In this inspiring blog, we focus on the power of ideas to transform businesses, communities, and lives. From tech startups revolutionizing industries to social enterprises making a difference, we explore stories where bold thinking meets execution. You’ll discover how creativity, when combined with purpose and strategy, leads to sustainable success. We also share practical frameworks for nurturing innovation within teams and organizations. Whether you're a dreamer, a doer, or somewhere in between, this blog is your reminder that the future belongs to those who dare to imagine and act. Because one idea, empowered at the right time, can change everything.",
            image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img3.jpg",
            date: "June 30, 2025",
            slug: "Empowering ideas, transforming futures"
        },
        {
            id: 4,
            title: "Tech Trends That Shape Tomorrow",
            description: "Technology is evolving faster than ever, and staying updated on emerging trends is no longer optional—it’s essential. In this blog, we spotlight the tech innovations that are shaping the world of tomorrow. From artificial intelligence and blockchain to quantum computing and green tech, we examine how these advancements are transforming industries, redefining customer experiences, and creating new opportunities. With expert insights, case studies, and simplified explanations, you’ll gain a clearer picture of where technology is heading and how it may affect your business, career, or lifestyle. Whether you're a tech enthusiast, entrepreneur, or corporate leader, this blog equips you with the knowledge to stay relevant and proactive in an ever-changing digital world. The future isn't just coming—it's being built right now.",
            image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img4.jpg",
            date: "July 2, 2025",
            slug: "Tech trends that shape tomorrow"
        },
        {
            id: 5,
            title: "From Challenges To Opportunities",
            description: "Every challenge carries the seed of opportunity—but only those with the right mindset can see it. In this motivational and practical blog, we explore how businesses and individuals can turn setbacks into stepping stones. Drawing from real-life examples and proven strategies, we highlight how resilience, adaptability, and creative thinking can turn adversity into innovation. Whether it’s navigating a market crisis, adapting to new technologies, or managing internal changes, the ability to reframe challenges is a critical success factor. You’ll find actionable tips on problem-solving, strategic planning, and leadership under pressure. Because the path to growth is rarely smooth—but with the right approach, even the hardest moments can lead to breakthroughs. Let’s shift the lens and find the opportunity within the challenge.",
            image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img5.jpg",
            date: "July 5, 2025",
            slug: "From challenges to opportunities"
        },
        {
            id: 6,
            title: "Beyond Limits: Innovating For Success",
            description: "Success in the modern world requires more than consistency—it demands bold innovation and the courage to go beyond limits. This blog is dedicated to those who believe that barriers are meant to be broken. We dive into the mindset, systems, and stories behind some of the most innovative breakthroughs in business and technology. What drives people to disrupt the status quo? How can you build a culture of innovation that fuels long-term success? Whether you’re launching a new product, reimagining a process, or transforming your organization, this blog provides the insights to push boundaries. Through expert interviews, market trends, and creative strategies, you’ll learn how to innovate not just for survival—but for sustainable, scalable success. Because the future belongs to those who dare to go beyond.",
            image: "https://html.designingmedia.com/buyhost/assets/images/single-blog-tab-img6.jpg",
            date: "July 7, 2025",
            slug: "Beyond limits: innovating for success"
        }
    ]
    return new Response(JSON.stringify(blogData), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })
}