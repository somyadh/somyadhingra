exports.blogPosts = [
    {
        "uid": 1,
        "heading": "Chronicles of a Tech Enthusiast: Prepare to be Amazed (or Mildly Entertained)",
        "summary": "Watch a tech enthusiast bumble through it",
        "fullText": "<html><head><title>Chronicles of a Tech Enthusiast: Prepare to be Amazed (or Mildly Entertained)</title></head><body><p>As an aspiring tech professional, I've always been fascinated by the rapid pace of innovation in the industry.</p><p>From the latest advancements in cloud computing and artificial intelligence to the emergence of cutting-edge web technologies, there's always something new to explore and learn.</p><p>That's why I've decided to start this technical blog - to share my journey of discovery and the insights I gain along the way.</p><h3>My primary goals in writing this blog are:</h3><ol><li><strong>Personal Knowledge Capture</strong>: As I delve into new topics through online courses, industry blogs, and hands-on projects, I want to distill the key learnings into concise, easy-to-reference blog posts. This will help me build a personal knowledge base that I can revisit and build upon over time.</li><li><strong>Building an Online Presence</strong>: By documenting my technical growth and sharing my experiences, I hope to establish an online presence that reflects my skills and expertise. I hope this can be a valuable asset in the tech community, allowing me to connect with like-minded individuals and showcase my passion for the field.</li><li><strong>Fostering Curiosity</strong>: I want to craft blog posts that pique the reader's interest and encourage them to explore the topics further. With our reducing timespan of attention my aim is to provide just enough information to get someone excited about a new technology or concept or even a simple fact.</li></ol><p>Twice a month, you can expect to see blog posts covering a wide range of technical subjects. It can be anything under the sun that picques my intrest, or just something I want to remember and refer back to in future</p><p>Whether you're an experienced engineer, a curious hobbyist, or an aspiring tech professional, I invite you to join me on this journey of exploration and learning.</p><p>I'm excited to connect with like-minded individuals, exchange ideas, and together, push the boundaries of what's possible in the world of technology.</p><p>So, let's get started! I can't wait to share my first technical deep dive with you.</p></body></html>",
        "likes": 0,
        "link": "/1",
        "image": "./techNoobGirl.jpg",
        "imageAltText": "ITech Noob's Adventures",
        "posted_on": '07/04/2024'
    },
    {
        "uid": 2,
        "heading": "AWS CloudFront vs Cloudflare: Traditional CDN vs CDN based on Reverse Proxy",
        "summary": "CDN Titans Comparison",
        "fullText": "<html><head><title>CDN Titans Comparison</title></head><body><h3>Content Delivery Networks (CDNs)</h3><p>CDNs cache and serve content from globally distributed servers, improving load times and availability. Two CDN giants are <strong>AWS CloudFront</strong> and <strong>Cloudflare</strong> - but how do they differ?</p><h3>Operational Models</h3><ul><li><strong>Cloudflare</strong> uses a reverse proxy model, routing traffic through its name servers.</li><li><strong>CloudFront</strong> follows a traditional CDN model, with unique URLs directing traffic to its network.</li></ul><h3>Request Routing</h3><ul><li><strong>Cloudflare</strong> routes requests through its servers, determining optimal paths.</li><li><strong>CloudFront</strong> uses the request's geographic origin to select the closest edge server.</li></ul><h3>Security Features</h3><ul><li><strong>Cloudflare</strong> natively offers DDoS protection, WAF, and SSL/TLS encryption.</li><li><strong>CloudFront</strong> requires integrating AWS Shield and WAF for advanced security.</li></ul><h3>When Cloudflare Shines</h3><ul><li>Cloudflare's reverse proxy model means all traffic goes through Cloudflare's servers before reaching the origin server. This allows Cloudflare to inspect and filter traffic using its built-in security features like DDoS protection and Web Application Firewall (WAF).</li><li>However, since all traffic goes through Cloudflare's servers, there can be some added overhead/latency for non-cacheable or dynamic content that can't be served directly from Cloudflare's edge cache.</li></ul><h3>When CloudFront Shines</h3><ul><li>For AWS-centric architectures, CloudFront seamlessly integrates with other AWS services.</li><li>AWS CloudFront's traditional CDN model is optimized for serving cached static assets from the edge, while dynamic content requests are routed directly to the origin without passing through CloudFront's edge cache. This reduces potential latency for dynamic traffic.</li><li>The trade-off is additional effort to set up security integrations</li></ul><p>While both CDNs boost performance and scale, their architectures and feature sets differ.</p></body></html>",
        "likes": 0,
        "link": "/2",
        "image": "./techNoobGirl.jpg",
        "imageAltText": "ITech Noob's Adventures",
        "posted_on": '20/04/2024'
    },
    {
        "uid": 3,
        "heading": "Node.js, Docker, and Alpine Linux: A Tale of Compatibility Woes",
        "summary": "The Alpine Linux Deception",
        "fullText": "<html><head><title>Node.js, Docker, and Alpine Linux: A Tale of Compatibility Woes</title>\n</head>\n<body> <p>Upgrading Node.js backend from version 10 to 16 and containerizing it with Docker? Easy peasy, right? Well, that's what I thought until I decided to use Alpine Linux for a smaller image size. Little did I know, I was in for a wild ride!</p>\n\n    <p>Issues started popping up left and right, from missing header files to module errors. I felt like I was playing whack-a-mole with error messages. The most memorable ones?</p>\n\n    <pre><code>Failed to load gRPC binary module because it was not installed for the current system\nExpected directory: node-v93-linux-arm64-musl\nFound: [node-v64-darwin-x64-unknown] </code></pre>\n\n    <p>And another one:</p>\n\n    <pre><code>./vendor/abseil-cpp/absl/base/internal/direct_mmap.h:36:10: fatal error: linux/unistd.h: No such file or directory\n308.0 npm ERR! 36 | #include &lt;linux/unistd.h&gt; </code></pre>\n\n    <p>Turns out, the culprit was: Alpine Linux uses musl instead of the more common glibc library. While musl is lightweight and perfect for containers, it can cause compatibility issues. In my case it was <code>node-gyp</code> which required <code>glibc</code></p>\n\n    <p>Alpine has some other issues as well which I didn't encounter but Martin Heinz has written a detailed <a href=\"https://martinheinz.dev/blog/92\">blog</a> around it, including my issue</p>\n\n    <p>In my case I used multi-stage build process to solve this issue. Generally, in the first stage, we use a larger base image (like a full-fledged Debian or Ubuntu) to build and compile app. Then, in the second stage, we copy the compiled artifacts into a Alpine Linux image for production.</p>\n\n    <p>But I wanted even more adventure so I hunted down the required packages in my case it was - <code>libc-dev</code> and <code>linux-headers</code> and used alpine as my base image as well:</p>\n\n    <pre><code># Stage 1: Build the application\nFROM node:16.20.1-alpine as builder\nENV NODE_ENV=production\nWORKDIR /app\nCOPY [\"package.json\", \"./\"]\n\n# Install the necessary build dependencies in the builder image check drive\nRUN apk add --no-cache --virtual .gyp python3 make g++ libc-dev linux-headers \\\n    &amp;&amp; npm install --legacy-peer-deps --production \\\n    &amp;&amp; npm prune --production \\\n    &amp;&amp; apk del .gyp python3 make g++ libc-dev linux-headers\nCOPY . .\n\n# Stage 2: Create a smaller production image\nFROM node:16.20.1-alpine\nENV NODE_ENV=production\nWORKDIR /app\n\n# Copy only the necessary built artifacts and dependencies from the builder stage\nCOPY --from=builder /app .\n\nEXPOSE 9001\nCMD [ \"node\", \"server.js\" ]  </code></pre>\n\n    <p>Ohh by the way this never went to production because of some other unrelated issue. But it taught me a valuable lesson: always be prepared for compatibility adventures when using Alpine Linux!</p>\n</body>\n</html>",
         "likes": 0,
        "link": "/3",
        "image": "./container-issue.jpg",
        "imageAltText": "Girl trying to containerise software",
        "posted_on": '01/05/2024'
    },
    {
        "uid": 4,
        "heading": "Automating Video Transcription with Python and Whisper",
        "summary": " Whisper AI: Saves the day",
        "fullText": `<html>
        <head>
            <title>Automating Video Transcription with Python and Whisper</title>
        </head>
        <body>
            <p>I often revisit educational videos or courses to reinforce my understanding. However, as a non-binge-watcher, my
                preferred mode of studying is reading. Re-watching videos can be time-consuming and prone to missing important
                details.</p>
            <p>With a collection of videos on my hard disk, I wanted a solution that could transcribe these videos without
                spending much money and preferably that can be done on my laptop. My videos were in English, featuring a single
                person speaking clearly, making it a fairly simple case for transcription.</p>
            <p>That's how <strong>whisper-video-transcribe</strong> came about. It's a simple Python-based video transcriber that takes in a
                folder of video files and does the following for each video:</p>
            <h4>1. Audio Extraction:</h4>
            <ul>
                <li>Extracts audio from video</li>
                <li>Each video of mine were approximately 30 minutes long and ranged from 500MB to 1.2GB.</li>
                <li>To optimize accuracy, processing time, and show some mercy to my laptop, I extracted audio from the videos using
                    FFmpeg, creating WAV files.</li>
            </ul>
            <pre><code class="language-python"># Extract audio using FFmpeg \n subprocess.call(['ffmpeg', '-i', video_path, '-vn', '-acodec', 'pcm_s16le', '-ar', '16000', '-ac', '1', audio_path])</code></pre>
            <h4>2. Transcription:</h4>
            <ul>
                <li>The extracted audio is then transcribed using the OpenAI Whisper library.</li>
                <li>After trying multiple models, I found "medium" to work best for me, despite the longer processing time.
                </li>
                <li>For someone who wants to transcribe English videos and has less time on their hands but can handle slightly
                    less accurate results OR has a laptop with a lower configuration, the "base" model can provide a good
                    balance between accuracy and speed</li>
                <li>You can find out more about this and many other features that Whisper provides at <a
                        href="https://github.com/openai/whisper" target="_blank">https://github.com/openai/whisper</a>.</li>
            </ul>
            <pre><code class="language-python"># Use Whisper to transcribe \n model = whisper.load_model("base") \n result = model.transcribe(audio_path)</code></pre>
            <h4>3. Segment Generation:</h4>
            <ul>
                <li>Segment files with timing information are generated for easy navigation.</li>
                <li>These JSON files allow me to locate the approximate timestamp where I feel something is inaccurate, enabling
                    me to watch the video quickly and correct the transcriptions.</li>
            </ul>
            <p>Complete source code: <a href="https://github.com/somyadh/whisper-video-transcriber"
                    target="_blank">https://github.com/somyadh/whisper-video-transcriber</a></p>
            <p><strong>whisper-video-transcriber</strong> enabled quick skimming and easy reference for me,
                saving hours of time that would otherwise be spent re-watching videos.</p>
        </body>
        </html>`,
        "likes": 0,
        "link": "/4",
        "image": "./AISponsoredHappiness.jpg",
        "imageAltText": "Girl Happy because of AI",
        "posted_on": '14/05/2024'
    },
    {
        "uid": 5,
        "heading": "Proxy vs Reverse Proxy: The Network Traffic Controllers",
        "summary": "Who pulls the strings?",
        "fullText": `<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Proxy vs Reverse Proxy: The Network Traffic Controllers</title>
        </head>
        <body>
            <p>Proxies and reverse proxies play crucial roles in network architecture, each serving unique purposes. Understanding their differences is essential for designing efficient and secure systems. Let's explore:</p>
            <h4>Proxy: Client-Side Intermediary</h4>
            <p>A proxy acts as an intermediary between a client and the internet, masking the client's identity. The server responds to the proxy, which relays the response back to the client.</p>
            <ul>
                <li>Anonymity: Hides the client's identity from servers.</li>
                <li>Caching: Reduces server load and improves response times.</li>
                <li>Access Control: Blocks unwanted sites based on predefined rules.</li>
                <li>Geofencing: Restricts access based on geographical location.</li>
            </ul>
            <p><strong>Examples:</strong> HAProxy, Squid </p>
            
        
            <h4>Reverse Proxy: Server-Side Gateway</h4>
            <p>A reverse proxy sits between the internet and a server, receiving client requests and routing them to the appropriate server. The client remains unaware of the actual server handling the request.</p>
            <ul>
                <li>Load Balancing: Distributes requests across multiple servers for optimal performance.</li>
                <li>Caching: Accelerates content delivery and reduces server load.</li>
                <li>Backend Isolation: Hides internal server configuration from external clients.</li>
                <li>Logging and Monitoring: Collects valuable log data for analysis and troubleshooting.</li>
                <li>Canary Deployment: Enables gradual feature rollouts for testing and validation.</li>
            </ul>
            <p><strong>Examples:</strong> Cloudflare CDN, NGINX </p>
           
        
            <h4>Load Balancer: A Reverse Proxy Variant</h4>
            <p>Load balancers are specialized reverse proxies that distribute traffic among multiple servers based on server health and resource utilization.</p>
        </body>
        </html>
        `,
        "link": "/5",
        "image": "./container-issue.jpg",
        "imageAltText": "Girl trying to containerise software",
        "posted_on": '02/06/2024'
    },
    {
        "uid": 6,
        "heading": "Node.js: Single threaded? Really?",
        "summary": "Single thread, multiple requests, no sweat! Libuv at your service",
        "fullText": `<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Node.js: Single threaded? Really?</title>
        </head>
        <body>
         <p>Node.js is known for its ability to handle multiple requests concurrently in a single thread. But how does it achieve this? To understand Node.js's concurrency model, we need to explore how threads are used at the operating system (OS) level and how Node.js leverages non-blocking I/O APIs and the Libuv library.</p>
<h3>Thread Pools at OS level</h3>

<p>The thread pool is a key component in handling different types of tasks:</p>

<h4>1. Compute-Intensive Tasks</h4>

<p>When dealing with compute-intensive tasks like encryption, the threads are exclusively dedicated to the task at hand, at OS level. For example, if there are 4 threads in the pool and 6 encryption requests, the first 4 requests will be processed simultaneously, while the remaining 2 will be queued until a thread becomes available.</p>

<h4>2. I/O Tasks</h4>

<p>For I/O tasks (network or file), OS provides non-blocking I/O APIs. If there are 6 I/O requests and 4 threads in the pool, all 6 requests can be processed simultaneously, as the threads will be reused by the OS during the waiting periods.</p>

<h3>Libuv and Asynchronous I/O</h3>

<p>Libuv is a cross-platform I/O library that provides an abstraction layer for these asynchronous I/O operations and is responsible for managing the thread pool.</p>

<p>So now when:</p>

<ul>
  <li>Node.js receives an I/O request, it delegates the task to Libuv. Libuv registers the request with the OS and continues executing other code. Once the I/O operation is complete, the OS notifies Libuv, which then schedules the associated callback to be executed on the event loop.</li>
  <li>For blocking operations, like encryption, Libuv automatically delegates the task to one of the threads in the thread pool.</li>
</ul>

<p>Node.js's ability to handle multiple requests concurrently in a single process is made possible by its efficient use of non-blocking I/O APIs, the Libuv library, and the event loop.</p>
        </body>
        </html>
        `,
        "link": "/6",
        "image": "./nodejs-thread.jpg",
        "imageAltText": "Girl trying to containerise software",
        "posted_on": '29/06/2024'
    },
    
]