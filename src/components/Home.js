import React from 'react';
import Header from './Header';

const Home=(user)=>{

    return(
        <div>
            <Header/>
            <div style={{margin:'20px'}}>
                <h2 style={{textAlign:'center', marginBottom:'30px'}}>Welcome to the homepage of the DoConnect Application.</h2>
                <h5>DoConnect : Connecting Curiosity: Your Gateway to Shared Knowledge</h5>
                <p >This is a popular Question and Answer application in which technical questions are asked and answered.</p><br/>
                <p><strong>Chatbots vs. AI chatbots vs. virtual agents</strong><br/>
The terms chatbot, AI chatbot and virtual agent are often used interchangeably, which can cause confusion. While the technologies these terms refer to are closely related, subtle distinctions yield important differences in their respective capabilities.

Chatbot is the most inclusive, catch-all term. Any software simulating human conversation, whether powered by traditional, rigid decision tree-style menu navigation or cutting-edge conversational AI, is a chatbot. Chatbots can be found across nearly any communication channel, from phone trees to social media to specific apps and websites.

AI chatbots are chatbots that employ a variety of AI technologies, from machine learning—comprised of algorithms, features, and data sets—that optimize responses over time, to natural language processing (NLP) and natural language understanding (NLU) that accurately interpret user questions and match them to specific intents. Deep learning capabilities enable AI chatbots to become more accurate over time, which in turn enables humans to interact with AI chatbots in a more natural, free-flowing way without being misunderstood.

Virtual agents are a further evolution of AI chatbot software that not only use conversational AI to conduct dialogue and deep learning to self-improve over time, but often pair those AI technologies with robotic process automation (RPA) in a single interface to act directly upon the user’s intent without further human intervention.

To help illustrate the distinctions, imagine that a user is curious about tomorrow’s weather. With a traditional chatbot, the user can use the specific phrase “tell me the weather forecast.” The chatbot says it will rain. With an AI chatbot, the user can ask, “What’s tomorrow’s weather lookin’ like?” The chatbot, correctly interpreting the question, says it will rain. With a virtual agent, the user can ask, “What’s tomorrow’s weather lookin’ like?”—and the virtual agent not only predicts tomorrow’s rain, but also offers to set an earlier alarm to account for rain delays in the morning commute.<br/><br/>

<strong>Common chatbot use cases</strong><br/>
Consumers use AI chatbots for many kinds of tasks, from engaging with mobile apps to using purpose-built devices such as intelligent thermostats and smart kitchen appliances. Business uses are equally varied: Marketers use AI-powered chatbots to personalize customer experiences and streamline e-commerce operations; IT and HR teams use them to enable employee self-service; contact centers rely on chatbots to streamline incoming communications and direct customers to resources.

Conversational AI chatbots can remember conversations with users and incorporate this context into their interactions. When combined with automation capabilities including robotic process automation (RPA), users can accomplish complex tasks through the chatbot experience. And if a user is unhappy and needs to speak to a real person, the transfer can happen seamlessly. Upon transfer, the live support agent can get the full chatbot conversation history.

Conversational interfaces can vary, too. AI chatbots are commonly used in social media messaging apps, standalone messaging platforms, proprietary websites and apps, and even on phone calls (where they are also known as integrated voice response, or IVR).<br/><br/>

<strong>Typical use cases include: </strong><br/>

1. Timely, always-on assistance for customer service or human resource issues.<br/>

2. Personalized recommendations in an e-commerce context.<br/>

3. Promoting products and services with chatbot marketing.<br/>

4. Defining of fields within forms and financial applications. <br/>

5. Intaking and appointment scheduling for healthcare offices.<br/>

6. Automated reminders to for time- or location-based tasks.<br/><br/>

<strong>Benefits of chatbots</strong><br/>
The ability of AI chatbots to accurately process natural human language and automate personalized service in return creates clear benefits for businesses and customers alike.<br/><br/>

<strong>Improve customer engagement and brand loyalty</strong><br/>
Before the advent of chatbots, any customer questions, concerns or complaints—big or small—required a human response. Naturally, timely or even urgent customer issues sometimes arise off-hours, over the weekend or during a holiday. But staffing customer service departments to meet unpredictable demand, day or night, is a costly and difficult endeavor.

Today, chatbots can consistently manage customer interactions 24x7 while continuously improving the quality of the responses and keeping costs down. Chatbots automate workflows and free up employees from repetitive tasks. A chatbot can also eliminate long wait times for phone-based customer support, or even longer wait times for email, chat and web-based support, because they are available immediately to any number of users at once. That’s a great user experience—and satisfied customers are more likely to exhibit brand loyalty.<br/><br/>

<strong>Reduce costs and boost operational efficiency</strong><br/>
Staffing a customer support center day and night is expensive. Likewise, time spent answering repetitive queries (and the training that is required to make those answers uniformly consistent) is also costly. Many overseas enterprises
offer the outsourcing of these functions, but doing so carries its own significant cost and reduces control over a brand’s interaction with its customers.

A chatbot, however, can answer questions 24 hours a day, seven days a week. It can provide a new first line of support, supplement support during peak periods, or offload tedious repetitive questions so human agents can focus on more complex issues. Chatbots can help reduce the number of users requiring human assistance, helping businesses more efficient scale up staff to meet increased demand or off-hours requests.<br/><br/>

<strong>Generate leads and satisfy customers</strong><br/>
Chatbots can help with sales lead generation and improve conversion rates. For example, a customer browsing a website for a product or service might have questions about different features, attributes or plans. A chatbot can provide these answers in situ, helping to progress the customer toward purchase. For more complex purchases with a multistep sales funnel, a chatbot can ask lead qualification questions and even connect the customer directly with a trained sales agent.<br/><br/>

<strong>Risks and limitations of chatbots </strong><br/>
Any advantage of a chatbot can be a disadvantage if the wrong platform, programming, or data are used. Traditional AI chatbots can provide quick customer service, but have limitations. Many rely on rule-based systems that automate tasks and provide predefined responses to customer inquiries.

Newer, generative AI chatbots can bring security risks, with the threat of data leakage, sub-standard confidentiality and liability concerns, intellectual property complexities, incomplete licensing of source data, and uncertain privacy and compliance with international laws. With a lack of proper input data, there is the ongoing risk of “hallucinations,” delivering inaccurate or irrelevant answers that require the customer to escalate the conversation to another channel.

Security and data leakage are a risk if sensitive third-party or internal company information is entered into a generative AI chatbot—becoming part of the chatbot’s data model which might be shared with others who ask relevant questions. This could lead to data leakage and violate an organization’s security policies.<br/><br/>

<strong>Best practices and tips for selecting chatbots</strong><br/>
Selecting the right chatbot platform can have a significant payoff for both businesses and users. Users benefit from immediate, always-on support while businesses can better meet expectations without costly staff overhauls.

For example, an e-commerce company could deploy a chatbot to provide browsing customers with more detailed information about the products they’re viewing. The HR department of an enterprise organization might ask a developer to find a chatbot that can give employees integrated access to all of their self-service benefits. Software engineers might want to integrate an AI chatbot directly into their complex product.

Whatever the case or project, here are five best practices and tips for selecting a chatbot platform.

Pick a solution that can accomplish immediate goals but won’t limit future expansion. Why does a team want its own chatbot? How is this goal currently addressed, and what are the challenges that are driving the need for a chatbot? Does it offer templates to help organizations scale up and diversify chatbot offerings in the future, or will other teams need to develop something else from scratch? Does the interface enable superior chatbot design? Does the pricing allow for efficient internal expansion?<br/>

</p>
            </div>
            
        </div>
    )
}

export default Home;