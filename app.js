const tools = [
    {
        id: 1,
        name: "豆包",
        description: "字节跳动推出的多功能AI聊天机器人，支持文案创作、图像生成、视频生成等",
        category: "chatbot",
        tags: ["AI对话", "AI助手"],
        url: "https://www.doubao.com/",
        color: "#6366F1",
        features: ["智能对话", "文案创作", "图像生成", "视频生成", "代码辅助"],
        platforms: ["网页", "iOS", "Android", "API"],
        pricing: "免费版可用，高级功能付费",
        rating: 4.8,
        reviews: 158000,
        highlights: "国内访问稳定，功能全面，支持多模态生成",
        pros: ["响应速度快", "支持中文", "功能丰富", "界面简洁"],
        cons: ["部分高级功能需要付费", "创意生成质量不稳定"]
    },
    {
        id: 2,
        name: "ChatGPT",
        description: "OpenAI开发的强大AI对话助手，能力惊人",
        category: "chatbot",
        tags: ["AI对话", "AI助手"],
        url: "https://chat.openai.com/",
        color: "#10B981",
        features: ["智能对话", "代码生成", "数据分析", "图像理解", "多模态"],
        platforms: ["网页", "iOS", "Android", "API"],
        pricing: "免费版可用，GPT-4需订阅",
        rating: 4.9,
        reviews: 500000,
        highlights: "业界领先的大语言模型，能力全面",
        pros: ["功能强大", "多模态支持", "生态完善", "API丰富"],
        cons: ["国内访问困难", "价格较高", "隐私担忧"]
    },
    {
        id: 3,
        name: "Claude",
        description: "Anthropic开发的AI助手，专业且可靠",
        category: "chatbot",
        tags: ["AI对话", "AI助手"],
        url: "https://claude.ai/",
        color: "#F97316",
        features: ["超长上下文", "文档理解", "代码分析", "安全可靠"],
        platforms: ["网页", "API"],
        pricing: "免费版可用，高级版付费",
        rating: 4.7,
        reviews: 89000,
        highlights: "支持100K上下文窗口，适合长文档处理",
        pros: ["超长上下文", "安全合规", "专业可靠", "免费版强大"],
        cons: ["功能相对单一", "界面较简单"]
    },
    {
        id: 4,
        name: "Gemini",
        description: "Google推出的AI对话助手",
        category: "chatbot",
        tags: ["AI对话", "AI助手"],
        url: "https://gemini.google.com/",
        color: "#3B82F6"
    },
    {
        id: 5,
        name: "文心一言",
        description: "百度推出的国产AI大模型",
        category: "chatbot",
        tags: ["AI对话", "百度"],
        url: "https://yiyan.baidu.com/",
        color: "#22D3EE"
    },
    {
        id: 6,
        name: "通义千问",
        description: "阿里推出的AI对话助手",
        category: "chatbot",
        tags: ["AI对话", "阿里"],
        url: "https://tongyi.aliyun.com/",
        color: "#8B5CF6"
    },
    {
        id: 7,
        name: "讯飞星火",
        description: "科大讯飞推出的AI大模型",
        category: "chatbot",
        tags: ["AI对话", "讯飞"],
        url: "https://xinghuo.xfyun.cn/",
        color: "#EC4899"
    },
    {
        id: 8,
        name: "智谱清言",
        description: "智谱AI推出的AI对话助手",
        category: "chatbot",
        tags: ["AI对话", "GLM"],
        url: "https://www.zhipuai.cn/",
        color: "#F59E0B"
    },
    {
        id: 9,
        name: "Kimi",
        description: "月之暗面推出的AI助手，超长上下文",
        category: "chatbot",
        tags: ["AI对话", "长文本"],
        url: "https://kimi.moonshot.cn/",
        color: "#6366F1"
    },
    {
        id: 10,
        name: "跃问",
        description: "商汤科技推出的AI助手",
        category: "chatbot",
        tags: ["AI对话", "商汤"],
        url: "https://yuewen.cn/",
        color: "#22D3EE"
    },
    {
        id: 11,
        name: "蛙蛙写作",
        description: "AI小说和内容创作工具，支持小说、剧本、漫剧视频全链路",
        category: "writing",
        tags: ["AI写作", "小说创作"],
        url: "https://wawawriter.com/",
        color: "#6366F1"
    },
    {
        id: 12,
        name: "笔灵AI写作",
        description: "600+写作模板，AI一键生成论文/小说，论文降重降AI",
        category: "writing",
        tags: ["AI写作", "论文助手"],
        url: "https://ibiling.cn/",
        color: "#8B5CF6"
    },
    {
        id: 13,
        name: "讯飞绘文",
        description: "科大讯飞一站式AIGC内容运营平台，AI选题、写作、配图、发布",
        category: "writing",
        tags: ["AI写作", "内容运营"],
        url: "https://turbodesk.xfyun.cn/",
        color: "#22D3EE"
    },
    {
        id: 14,
        name: "秘塔写作猫",
        description: "AI写作辅助工具，纠错、改写、润色",
        category: "writing",
        tags: ["AI写作", "改写润色"],
        url: "https://xiezuocat.com/",
        color: "#F97316"
    },
    {
        id: 15,
        name: "新华妙笔",
        description: "新华社推出的AI公文写作平台",
        category: "writing",
        tags: ["AI写作", "公文"],
        url: "https://www.miaobi.cn/",
        color: "#EC4899"
    },
    {
        id: 16,
        name: "火龙果写作",
        description: "AI驱动的文字生产力工具",
        category: "writing",
        tags: ["AI写作", "效率工具"],
        url: "https://www.mypitaya.com/",
        color: "#10B981"
    },
    {
        id: 17,
        name: "悉语",
        description: "阿里旗下AI文案生成工具",
        category: "writing",
        tags: ["AI写作", "营销文案"],
        url: "https://chuangyi.alibaba.com/",
        color: "#F59E0B"
    },
    {
        id: 18,
        name: "创作饭",
        description: "AI内容创作平台",
        category: "writing",
        tags: ["AI写作", "内容创作"],
        url: "https://chuangzuofan.com/",
        color: "#3B82F6"
    },
    {
        id: 19,
        name: "清博AI",
        description: "AI写作与内容生成工具",
        category: "writing",
        tags: ["AI写作", "内容生成"],
        url: "https://ai@tsingbo.com/",
        color: "#6366F1"
    },
    {
        id: 20,
        name: "笔墨公文",
        description: "专为公文写作设计的AI工具",
        category: "writing",
        tags: ["AI写作", "公文"],
        url: "https://bimogongwen.com/",
        color: "#8B5CF6"
    },
    {
        id: 21,
        name: "Midjourney",
        description: "AI图像和插画生成工具，创造惊艳视觉作品",
        category: "image",
        tags: ["AI绘画", "图像生成"],
        url: "https://www.midjourney.com/",
        color: "#6366F1"
    },
    {
        id: 22,
        name: "Stable Diffusion",
        description: "开源文本到图像生成AI模型",
        category: "image",
        tags: ["AI绘画", "开源"],
        url: "https://stability.ai/",
        color: "#F97316"
    },
    {
        id: 23,
        name: "DALL-E 3",
        description: "OpenAI开发的图像生成AI，理解力强",
        category: "image",
        tags: ["AI绘画", "OpenAI"],
        url: "https://openai.com/dall-e-3",
        color: "#10B981"
    },
    {
        id: 24,
        name: "LiblibAI",
        description: "国内领先的AI图像创作平台和模型分享社区",
        category: "image",
        tags: ["AI绘画", "模型分享"],
        url: "https://www.liblib.art/",
        color: "#EC4899"
    },
    {
        id: 25,
        name: "吐司AI",
        description: "AI绘画模型社区和在线生图平台",
        category: "image",
        tags: ["AI绘画", "模型社区"],
        url: "https://tusiart.com/",
        color: "#8B5CF6"
    },
    {
        id: 26,
        name: "堆友AI",
        description: "阿里推出的AI绘画和设计平台",
        category: "image",
        tags: ["AI绘画", "阿里"],
        url: "https://d.design/",
        color: "#22D3EE"
    },
    {
        id: 27,
        name: "秒画",
        description: "商汤科技推出的免费AI作画和图片生成平台",
        category: "image",
        tags: ["AI绘画", "商汤"],
        url: "https://miaohua.sensetime.com/",
        color: "#F59E0B"
    },
    {
        id: 28,
        name: "通义万相",
        description: "阿里推出的AI创意内容生成平台",
        category: "image",
        tags: ["AI绘画", "阿里"],
        url: "https://tongyi.aliyun.com/wanxiang",
        color: "#3B82F6"
    },
    {
        id: 29,
        name: "文心一格",
        description: "百度推出的AI艺术和创意辅助平台",
        category: "image",
        tags: ["AI绘画", "百度"],
        url: "https://yige.baidu.com/",
        color: "#6366F1"
    },
    {
        id: 30,
        name: "可灵AI",
        description: "快手推出的AI图像和视频创作平台",
        category: "image",
        tags: ["AI绘画", "快手"],
        url: "https://klingai.com/",
        color: "#EC4899"
    },
    {
        id: 31,
        name: "即梦AI",
        description: "字节跳动推出的AI图片和视频生成平台",
        category: "image",
        tags: ["AI绘画", "字节"],
        url: "https://jimeng.jianying.com/",
        color: "#22D3EE"
    },
    {
        id: 32,
        name: "WHEE",
        description: "美图推出的AI图片和绘画创作生成平台",
        category: "image",
        tags: ["AI绘画", "美图"],
        url: "https://www.whee.com/",
        color: "#F97316"
    },
    {
        id: 33,
        name: "稿定AI",
        description: "一站式AI设计工具集，免费AI绘图、图片转AI绘画、AI抠图消除",
        category: "image",
        tags: ["AI设计", "抠图"],
        url: "https://www.gaoding.com/",
        color: "#8B5CF6"
    },
    {
        id: 34,
        name: "美图设计室",
        description: "AI图像创作和设计平台",
        category: "image",
        tags: ["AI设计", "美图"],
        url: "https://www.designkit.cn/",
        color: "#EC4899"
    },
    {
        id: 35,
        name: "创客贴AI",
        description: "AI辅助在线设计平台",
        category: "image",
        tags: ["AI设计", "在线设计"],
        url: "https://www.chuangkit.com/",
        color: "#10B981"
    },
    {
        id: 36,
        name: "MewXAI",
        description: "AI绘画和图片生成平台",
        category: "image",
        tags: ["AI绘画", "图片生成"],
        url: "https://www.mewxai.com/",
        color: "#6366F1"
    },
    {
        id: 37,
        name: "Civitai",
        description: "免费的AI图像绘画作品和模型分享平台和社区",
        category: "image",
        tags: ["AI绘画", "模型分享"],
        url: "https://civitai.com/",
        color: "#F59E0B"
    },
    {
        id: 38,
        name: "Lexica",
        description: "AI图像生成和搜索平台",
        category: "image",
        tags: ["AI绘画", "图像搜索"],
        url: "https://lexica.art/",
        color: "#3B82F6"
    },
    {
        id: 39,
        name: "Runway",
        description: "专业AI视频创作平台，支持视频生成和编辑",
        category: "video",
        tags: ["AI视频", "视频编辑"],
        url: "https://runwayml.com/",
        color: "#8B5CF6"
    },
    {
        id: 40,
        name: "Pika",
        description: "新兴AI视频生成工具，操作简单",
        category: "video",
        tags: ["AI视频", "视频生成"],
        url: "https://pika.art/",
        color: "#EC4899"
    },
    {
        id: 41,
        name: "HeyGen",
        description: "专业的AI数字人视频创作平台",
        category: "video",
        tags: ["AI数字人", "视频创作"],
        url: "https://www.heygen.com/",
        color: "#22D3EE"
    },
    {
        id: 42,
        name: "Sora",
        description: "OpenAI推出的AI视频生成模型",
        category: "video",
        tags: ["AI视频", "OpenAI"],
        url: "https://openai.com/sora",
        color: "#10B981"
    },
    {
        id: 43,
        name: "可灵AI",
        description: "快手推出的AI图像和视频创作平台",
        category: "video",
        tags: ["AI视频", "快手"],
        url: "https://klingai.com/",
        color: "#F97316"
    },
    {
        id: 44,
        name: "Vidu",
        description: "生数科技推出的AI视频生成平台",
        category: "video",
        tags: ["AI视频", "视频生成"],
        url: "https://www.vidu.com/",
        color: "#6366F1"
    },
    {
        id: 45,
        name: "PixVerse",
        description: "AI视频生成平台",
        category: "video",
        tags: ["AI视频", "视频生成"],
        url: "https://pixverse.com/",
        color: "#8B5CF6"
    },
    {
        id: 46,
        name: "白日梦AI",
        description: "AI创作平台，可生成最长50分钟的视频",
        category: "video",
        tags: ["AI视频", "长视频"],
        url: "https://baimeng.qq.com/",
        color: "#EC4899"
    },
    {
        id: 47,
        name: "即梦AI",
        description: "字节跳动推出的AI图片和视频生成平台",
        category: "video",
        tags: ["AI视频", "字节"],
        url: "https://jimeng.jianying.com/",
        color: "#22D3EE"
    },
    {
        id: 48,
        name: "腾讯智影",
        description: "腾讯推出的AI视频创作平台",
        category: "video",
        tags: ["AI视频", "腾讯"],
        url: "https://zenvideo.qq.com/",
        color: "#F59E0B"
    },
    {
        id: 49,
        name: "剪映",
        description: "字节跳动旗下视频编辑工具，集成AI能力",
        category: "video",
        tags: ["AI视频", "视频剪辑"],
        url: "https://www.capcut.cn/",
        color: "#10B981"
    },
    {
        id: 50,
        name: "一帧秒创",
        description: "AI视频生成和创作平台",
        category: "video",
        tags: ["AI视频", "视频生成"],
        url: "https://aigc.yizhentv.com/",
        color: "#3B82F6"
    },
    {
        id: 51,
        name: "AiPPT",
        description: "AI快速生成高质量PPT演示文稿",
        category: "office",
        tags: ["AI办公", "PPT生成"],
        url: "https://www.aippt.cn/",
        color: "#6366F1"
    },
    {
        id: 52,
        name: "办公小浣熊",
        description: "商汤科技推出的AI数据分析助手",
        category: "office",
        tags: ["AI办公", "数据分析"],
        url: "https://raccoon.sensetime.com/",
        color: "#F97316"
    },
    {
        id: 53,
        name: "WPS AI",
        description: "WPS办公软件集成的AI助手",
        category: "office",
        tags: ["AI办公", "文档处理"],
        url: "https://ai.wps.cn/",
        color: "#22D3EE"
    },
    {
        id: 54,
        name: "Notion AI",
        description: "Notion内置的AI写作和整理助手",
        category: "office",
        tags: ["AI办公", "笔记整理"],
        url: "https://www.notion.so/",
        color: "#10B981"
    },
    {
        id: 55,
        name: "Microsoft Copilot",
        description: "微软Office套件的AI助手",
        category: "office",
        tags: ["AI办公", "Office助手"],
        url: "https://copilot.microsoft.com/",
        color: "#3B82F6"
    },
    {
        id: 56,
        name: "腾讯文档AI",
        description: "腾讯文档集成的AI助手",
        category: "office",
        tags: ["AI办公", "文档处理"],
        url: "https://docs.qq.com/",
        color: "#EC4899"
    },
    {
        id: 57,
        name: "百度文库",
        description: "百度文档处理工具，集成AI能力",
        category: "office",
        tags: ["AI办公", "文档处理"],
        url: "https://wenku.baidu.com/",
        color: "#8B5CF6"
    },
    {
        id: 58,
        name: "印象笔记AI",
        description: "印象笔记集成的AI助手",
        category: "office",
        tags: ["AI办公", "笔记整理"],
        url: "https://www.yinxiang.com/",
        color: "#F59E0B"
    },
    {
        id: 59,
        name: "飞书妙记",
        description: "字节跳动飞书内置的AI会议记录工具",
        category: "office",
        tags: ["AI办公", "会议记录"],
        url: "https://feishu.cn/",
        color: "#6366F1"
    },
    {
        id: 60,
        name: "ChatPDF",
        description: "AI驱动的PDF文档分析和问答工具",
        category: "office",
        tags: ["AI办公", "PDF处理"],
        url: "https://www.chatpdf.com/",
        color: "#22D3EE"
    },
    {
        id: 61,
        name: "Coze扣子",
        description: "字节跳动推出的AI智能体平台",
        category: "agent",
        tags: ["AI智能体", "工作流"],
        url: "https://www.coze.cn/",
        color: "#6366F1"
    },
    {
        id: 62,
        name: "文心智能体",
        description: "百度推出的AI智能体平台",
        category: "agent",
        tags: ["AI智能体", "百度"],
        url: "https://agents.baidu.com/",
        color: "#22D3EE"
    },
    {
        id: 63,
        name: "智谱GLM",
        description: "智谱AI推出的智能体和工作流平台",
        category: "agent",
        tags: ["AI智能体", "GLM"],
        url: "https://www.zhipuai.cn/",
        color: "#8B5CF6"
    },
    {
        id: 64,
        name: "讯飞星火智能体",
        description: "科大讯飞推出的AI智能体平台",
        category: "agent",
        tags: ["AI智能体", "讯飞"],
        url: "https://xinghuo.xfyun.cn/",
        color: "#EC4899"
    },
    {
        id: 65,
        name: "通义智能体",
        description: "阿里推出的AI智能体平台",
        category: "agent",
        tags: ["AI智能体", "阿里"],
        url: "https://tongyi.aliyun.com/",
        color: "#F59E0B"
    },
    {
        id: 66,
        name: "腾讯元器",
        description: "腾讯推出的AI智能体平台",
        category: "agent",
        tags: ["AI智能体", "腾讯"],
        url: "https://yuanqi.tencent.com/",
        color: "#10B981"
    },
    {
        id: 67,
        name: "助手卡片",
        description: "AI智能体创建和分享平台",
        category: "agent",
        tags: ["AI智能体", "工作流"],
        url: "https://zhushukadian.com/",
        color: "#3B82F6"
    },
    {
        id: 68,
        name: "AskXBOT",
        description: "AI智能对话机器人平台",
        category: "agent",
        tags: ["AI智能体", "对话机器人"],
        url: "https://www.askxbot.com/",
        color: "#6366F1"
    },
    {
        id: 69,
        name: "TRAE",
        description: "AI编程IDE，Vibe Coding必备工具",
        category: "programming",
        tags: ["AI编程", "IDE"],
        url: "https://trae.ai/",
        color: "#6366F1"
    },
    {
        id: 70,
        name: "Cursor",
        description: "AI代码编辑器，专注编程效率",
        category: "programming",
        tags: ["AI编程", "代码编辑"],
        url: "https://cursor.com/",
        color: "#22D3EE"
    },
    {
        id: 71,
        name: "GitHub Copilot",
        description: "GitHub推出的AI编程助手",
        category: "programming",
        tags: ["AI编程", "代码补全"],
        url: "https://github.com/features/copilot",
        color: "#8B5CF6"
    },
    {
        id: 72,
        name: "Claude Code",
        description: "Anthropic推出的命令行编程助手",
        category: "programming",
        tags: ["AI编程", "CLI工具"],
        url: "https://claude.ai/code",
        color: "#F97316"
    },
    {
        id: 73,
        name: "Codeium",
        description: "免费的AI代码补全工具",
        category: "programming",
        tags: ["AI编程", "代码补全"],
        url: "https://codeium.com/",
        color: "#10B981"
    },
    {
        id: 74,
        name: "Tabnine",
        description: "AI代码补全工具，支持多种语言",
        category: "programming",
        tags: ["AI编程", "代码补全"],
        url: "https://www.tabnine.com/",
        color: "#EC4899"
    },
    {
        id: 75,
        name: "Replit",
        description: "AI驱动的在线编程平台",
        category: "programming",
        tags: ["AI编程", "在线IDE"],
        url: "https://replit.com/",
        color: "#F59E0B"
    },
    {
        id: 76,
        name: "Bolt",
        description: "AI驱动的全栈开发平台",
        category: "programming",
        tags: ["AI编程", "全栈开发"],
        url: "https://bolt.new/",
        color: "#3B82F6"
    },
    {
        id: 77,
        name: "CodeSandbox",
        description: "在线代码编辑和协作平台",
        category: "programming",
        tags: ["AI编程", "在线IDE"],
        url: "https://codesandbox.io/",
        color: "#6366F1"
    },
    {
        id: 78,
        name: "V0",
        description: "Vercel推出的AI代码生成工具",
        category: "programming",
        tags: ["AI编程", "前端开发"],
        url: "https://v0.dev/",
        color: "#8B5CF6"
    },
    {
        id: 79,
        name: "Figma AI",
        description: "Figma内置的AI设计助手",
        category: "design",
        tags: ["AI设计", "UI设计"],
        url: "https://www.figma.com/",
        color: "#6366F1"
    },
    {
        id: 80,
        name: "Mastergo AI",
        description: "Mastergo内置的AI设计助手",
        category: "design",
        tags: ["AI设计", "UI设计"],
        url: "https://mastergo.com/",
        color: "#22D3EE"
    },
    {
        id: 81,
        name: "即时AI",
        description: "即时设计内置的AI设计助手",
        category: "design",
        tags: ["AI设计", "UI设计"],
        url: "https://js.design/",
        color: "#8B5CF6"
    },
    {
        id: 82,
        name: "Pixso AI",
        description: "Pixso内置的AI设计助手",
        category: "design",
        tags: ["AI设计", "UI设计"],
        url: "https://pixso.cn/",
        color: "#EC4899"
    },
    {
        id: 83,
        name: "妙办AI",
        description: "AI流程图和思维导图生成工具",
        category: "design",
        tags: ["AI设计", "流程图"],
        url: "https://miaoban.com/",
        color: "#F59E0B"
    },
    {
        id: 84,
        name: "Whimsical AI",
        description: "AI驱动的设计协作平台",
        category: "design",
        tags: ["AI设计", "协作"],
        url: "https://whimsical.com/",
        color: "#10B981"
    },
    {
        id: 85,
        name: "Framer AI",
        description: "AI驱动的网站设计和构建工具",
        category: "design",
        tags: ["AI设计", "网站设计"],
        url: "https://www.framer.com/",
        color: "#3B82F6"
    },
    {
        id: 86,
        name: "Adobe Firefly",
        description: "Adobe推出的AI创意生成工具",
        category: "design",
        tags: ["AI设计", "创意生成"],
        url: "https://www.adobe.com/firefly.html",
        color: "#F97316"
    },
    {
        id: 87,
        name: "剪映专业版",
        description: "字节跳动视频编辑软件，集成AI能力",
        category: "audio",
        tags: ["AI音频", "视频剪辑"],
        url: "https://www.capcut.cn/",
        color: "#6366F1"
    },
    {
        id: 88,
        name: "讯飞听见",
        description: "科大讯飞语音转文字服务",
        category: "audio",
        tags: ["AI音频", "语音转文字"],
        url: "https://www.iflyrec.com/",
        color: "#22D3EE"
    },
    {
        id: 89,
        name: "飞书妙记",
        description: "字节跳动会议记录和语音转文字工具",
        category: "audio",
        tags: ["AI音频", "会议记录"],
        url: "https://feishu.cn/",
        color: "#8B5CF6"
    },
    {
        id: 90,
        name: "网易见外",
        description: "网易AI语音转写和翻译工具",
        category: "audio",
        tags: ["AI音频", "语音转写"],
        url: "https://jianwai.youdao.com/",
        color: "#EC4899"
    },
    {
        id: 91,
        name: "标贝科技",
        description: "AI语音合成和识别服务",
        category: "audio",
        tags: ["AI音频", "语音合成"],
        url: "https://www.data-baker.com/",
        color: "#F59E0B"
    },
    {
        id: 92,
        name: "魔音工坊",
        description: "AI配音和语音合成平台",
        category: "audio",
        tags: ["AI音频", "配音"],
        url: "https://www.moyin.com/",
        color: "#10B981"
    },
    {
        id: 93,
        name: "讯飞智作",
        description: "科大讯飞AI语音合成和配音工具",
        category: "audio",
        tags: ["AI音频", "配音"],
        url: "https://zhizuo.com/",
        color: "#3B82F6"
    },
    {
        id: 94,
        name: "通义听悟",
        description: "阿里AI会议记录和语音转写工具",
        category: "audio",
        tags: ["AI音频", "会议记录"],
        url: "https://tingwu.aliyun.com/",
        color: "#6366F1"
    },
    {
        id: 95,
        name: "秘塔AI搜索",
        description: "AI驱动的搜索引擎，无广告直达结果",
        category: "search",
        tags: ["AI搜索", "搜索引擎"],
        url: "https://metaso.cn/",
        color: "#6366F1"
    },
    {
        id: 96,
        name: "Perplexity",
        description: "AI驱动的对话式搜索引擎",
        category: "search",
        tags: ["AI搜索", "搜索引擎"],
        url: "https://www.perplexity.ai/",
        color: "#22D3EE"
    },
    {
        id: 97,
        name: "Kimi",
        description: "月之暗面AI搜索和对话助手",
        category: "search",
        tags: ["AI搜索", "AI助手"],
        url: "https://kimi.moonshot.cn/",
        color: "#8B5CF6"
    },
    {
        id: 98,
        name: "360AI搜索",
        description: "360推出的AI搜索引擎",
        category: "search",
        tags: ["AI搜索", "搜索引擎"],
        url: "https://ai.so.com/",
        color: "#F97316"
    },
    {
        id: 99,
        name: "夸克AI",
        description: "阿里夸克浏览器内置AI搜索",
        category: "search",
        tags: ["AI搜索", "浏览器"],
        url: "https://www.quark.cn/",
        color: "#EC4899"
    },
    {
        id: 100,
        name: "天工AI搜索",
        description: "昆仑万维推出的AI搜索工具",
        category: "search",
        tags: ["AI搜索", "搜索引擎"],
        url: "https://www.tiangong.cn/",
        color: "#10B981"
    },
    {
        id: 101,
        name: "Hugging Face",
        description: "AI模型开源社区和平台",
        category: "framework",
        tags: ["AI开发", "模型社区"],
        url: "https://huggingface.co/",
        color: "#F97316"
    },
    {
        id: 102,
        name: "GitHub",
        description: "全球最大的代码托管平台，AI开发必备",
        category: "framework",
        tags: ["AI开发", "代码托管"],
        url: "https://github.com/",
        color: "#3B82F6"
    },
    {
        id: 103,
        name: "PyTorch",
        description: "开源深度学习框架",
        category: "framework",
        tags: ["AI开发", "深度学习"],
        url: "https://pytorch.org/",
        color: "#EE4C4C"
    },
    {
        id: 104,
        name: "TensorFlow",
        description: "Google开源深度学习框架",
        category: "framework",
        tags: ["AI开发", "深度学习"],
        url: "https://www.tensorflow.org/",
        color: "#FF6F00"
    },
    {
        id: 105,
        name: "飞桨PaddlePaddle",
        description: "百度开源深度学习平台",
        category: "framework",
        tags: ["AI开发", "深度学习"],
        url: "https://www.paddlepaddle.org.cn/",
        color: "#6366F1"
    },
    {
        id: 106,
        name: "魔搭ModelScope",
        description: "阿里达摩院推出的AI模型开源社区",
        category: "framework",
        tags: ["AI开发", "模型社区"],
        url: "https://www.modelscope.cn/",
        color: "#22D3EE"
    },
    {
        id: 107,
        name: "PyTorch Lightning",
        description: "PyTorch轻量级训练框架",
        category: "framework",
        tags: ["AI开发", "深度学习"],
        url: "https://www.pytorchlightning.ai/",
        color: "#22D3EE"
    },
    {
        id: 108,
        name: "LangChain",
        description: "AI应用开发框架",
        category: "framework",
        tags: ["AI开发", "应用框架"],
        url: "https://www.langchain.com/",
        color: "#6366F1"
    },
    {
        id: 109,
        name: "GPT-4",
        description: "OpenAI推出的最新一代AI大语言模型",
        category: "model",
        tags: ["AI模型", "大语言模型"],
        url: "https://openai.com/gpt-4",
        color: "#10B981"
    },
    {
        id: 110,
        name: "Claude 3",
        description: "Anthropic推出的AI大语言模型",
        category: "model",
        tags: ["AI模型", "大语言模型"],
        url: "https://claude.ai/",
        color: "#F97316"
    },
    {
        id: 111,
        name: "Gemini Pro",
        description: "Google AI推出的多模态大模型",
        category: "model",
        tags: ["AI模型", "多模态"],
        url: "https://deepmind.google/gemini",
        color: "#3B82F6"
    },
    {
        id: 112,
        name: "LLaMA",
        description: "Meta开源的大语言模型",
        category: "model",
        tags: ["AI模型", "开源"],
        url: "https://ai.meta.com/llama/",
        color: "#8B5CF6"
    },
    {
        id: 113,
        name: "Stable Diffusion XL",
        description: "Stability AI最新的图像生成模型",
        category: "model",
        tags: ["AI模型", "图像生成"],
        url: "https://stability.ai/",
        color: "#EC4899"
    },
    {
        id: 114,
        name: "GLM-4",
        description: "智谱AI推出的大语言模型",
        category: "model",
        tags: ["AI模型", "大语言模型"],
        url: "https://www.zhipuai.cn/",
        color: "#F59E0B"
    },
    {
        id: 115,
        name: "Qwen",
        description: "阿里通义千问大语言模型",
        category: "model",
        tags: ["AI模型", "大语言模型"],
        url: "https://tongyi.aliyun.com/",
        color: "#10B981"
    },
    {
        id: 116,
        name: "Yi",
        description: "零一万物推出的大语言模型",
        category: "model",
        tags: ["AI模型", "大语言模型"],
        url: "https://01.ai/",
        color: "#6366F1"
    },
    {
        id: 117,
        name: "DeepSeek",
        description: "深度求索推出的AI大语言模型",
        category: "model",
        tags: ["AI模型", "大语言模型"],
        url: "https://www.deepseek.com/",
        color: "#22D3EE"
    },
    {
        id: 118,
        name: "GPTZero",
        description: "AI内容检测工具，检测文章是否由AI生成",
        category: "detection",
        tags: ["AI检测", "内容检测"],
        url: "https://gptzero.me/",
        color: "#6366F1"
    },
    {
        id: 119,
        name: "Turnitin",
        description: "学术抄袭检测工具，新增AI检测功能",
        category: "detection",
        tags: ["AI检测", "学术检测"],
        url: "https://www.turnitin.com/",
        color: "#F97316"
    },
    {
        id: 120,
        name: "OriginalityAI",
        description: "AI内容和抄袭检测工具",
        category: "detection",
        tags: ["AI检测", "内容检测"],
        url: "https://originality.ai/",
        color: "#10B981"
    },
    {
        id: 121,
        name: "ChatGPT检测器",
        description: "检测文本是否由ChatGPT生成",
        category: "detection",
        tags: ["AI检测", "内容检测"],
        url: "https://platform.openai.com/ai-text-classifier",
        color: "#22D3EE"
    },
    {
        id: 122,
        name: "Winston AI",
        description: "AI内容检测和抄袭检测工具",
        category: "detection",
        tags: ["AI检测", "内容检测"],
        url: "https://gowinston.ai/",
        color: "#8B5CF6"
    },
    {
        id: 123,
        name: "PromptBase",
        description: "AI提示词交易和分享平台",
        category: "prompt",
        tags: ["AI提示词", "提示词市场"],
        url: "https://promptbase.com/",
        color: "#6366F1"
    },
    {
        id: 124,
        name: "Prompt engineering guide",
        description: "AI提示词工程指南和学习资源",
        category: "prompt",
        tags: ["AI提示词", "学习资源"],
        url: "https://www.promptingguide.ai/",
        color: "#22D3EE"
    },
    {
        id: 125,
        name: "FlowGPT",
        description: "ChatGPT提示词分享社区",
        category: "prompt",
        tags: ["AI提示词", "提示词分享"],
        url: "https://flowgpt.com/",
        color: "#8B5CF6"
    },
    {
        id: 126,
        name: "通用好帮手",
        description: "综合性AI提示词工具",
        category: "prompt",
        tags: ["AI提示词", "提示词工具"],
        url: "https://promptboom.com/",
        color: "#EC4899"
    },
    {
        id: 127,
        name: "Snack Prompt",
        description: "AI提示词探索和分享平台",
        category: "prompt",
        tags: ["AI提示词", "提示词分享"],
        url: "https://snackprompt.com/",
        color: "#F59E0B"
    },
    {
        id: 128,
        name: "Coursera",
        description: "在线学习平台，提供AI和机器学习课程",
        category: "learning",
        tags: ["AI学习", "在线课程"],
        url: "https://www.coursera.org/",
        color: "#0052CC"
    },
    {
        id: 129,
        name: "edX",
        description: "麻省理工和哈佛创建的在线学习平台",
        category: "learning",
        tags: ["AI学习", "在线课程"],
        url: "https://www.edx.org/",
        color: "#021F4B"
    },
    {
        id: 130,
        name: "fast.ai",
        description: "免费的深度学习课程",
        category: "learning",
        tags: ["AI学习", "深度学习"],
        url: "https://www.fast.ai/",
        color: "#F97316"
    },
    {
        id: 131,
        name: "DeepLearning.AI",
        description: "吴恩达创办的AI教育平台",
        category: "learning",
        tags: ["AI学习", "深度学习"],
        url: "https://www.deeplearning.ai/",
        color: "#006400"
    },
    {
        id: 132,
        name: "Kaggle",
        description: "数据科学和机器学习竞赛平台",
        category: "learning",
        tags: ["AI学习", "竞赛平台"],
        url: "https://www.kaggle.com/",
        color: "#20BEFF"
    },
    {
        id: 133,
        name: "知乎",
        description: "中文互联网知识分享社区",
        category: "learning",
        tags: ["AI学习", "知识社区"],
        url: "https://www.zhihu.com/",
        color: "#0084FF"
    },
    {
        id: 134,
        name: "掘金",
        description: "程序员技术社区",
        category: "learning",
        tags: ["AI学习", "技术社区"],
        url: "https://juejin.cn/",
        color: "#007FFF"
    },
    {
        id: 135,
        name: "和鲸",
        description: "数据科学社区和竞赛平台",
        category: "learning",
        tags: ["AI学习", "数据科学"],
        url: "https://www.heywhale.com/",
        color: "#6366F1"
    },
    {
        id: 136,
        name: "Perplexity AI",
        description: "AI驱动的搜索引擎，提供准确的答案",
        category: "search",
        tags: ["AI搜索", "问答"],
        url: "https://www.perplexity.ai/",
        color: "#6366F1",
        features: ["实时搜索", "问答对话", "引用来源"],
        platforms: ["网页", "iOS", "Android"],
        pricing: "免费版可用，Pro版付费",
        rating: 4.7,
        highlights: "结合AI与实时搜索，答案有来源可追溯"
    },
    {
        id: 137,
        name: "You.com",
        description: "AI搜索引擎，专注隐私保护",
        category: "search",
        tags: ["AI搜索", "隐私"],
        url: "https://you.com/",
        color: "#22D3EE",
        features: ["隐私保护", "AI总结", "代码搜索"],
        platforms: ["网页"],
        pricing: "免费",
        rating: 4.5,
        highlights: "注重用户隐私，不追踪搜索历史"
    },
    {
        id: 138,
        name: "Poe",
        description: "Quora推出的AI聊天机器人平台",
        category: "chatbot",
        tags: ["AI对话", "多模型"],
        url: "https://poe.com/",
        color: "#8B5CF6",
        features: ["多模型支持", "实时对话", "API访问"],
        platforms: ["网页", "iOS", "Android"],
        pricing: "免费版可用，Pro版付费",
        rating: 4.6,
        highlights: "支持多种AI模型切换使用"
    },
    {
        id: 139,
        name: "Pi",
        description: "Character.AI推出的友好型AI助手",
        category: "chatbot",
        tags: ["AI对话", "情感陪伴"],
        url: "https://pi.ai/",
        color: "#EC4899",
        features: ["情感理解", "语音对话", "个性化"],
        platforms: ["网页", "iOS", "Android"],
        pricing: "免费",
        rating: 4.8,
        highlights: "专注情感交流，支持语音对话"
    },
    {
        id: 140,
        name: "Playground AI",
        description: "免费AI图像生成工具",
        category: "image",
        tags: ["AI绘画", "免费"],
        url: "https://playgroundai.com/",
        color: "#10B981",
        features: ["免费生成", "高清图像", "多种风格"],
        platforms: ["网页"],
        pricing: "免费版可用，高级版付费",
        rating: 4.5,
        highlights: "完全免费使用，无需注册"
    },
    {
        id: 141,
        name: "Leonardo AI",
        description: "游戏和动漫风格AI图像生成",
        category: "image",
        tags: ["AI绘画", "游戏"],
        url: "https://leonardo.ai/",
        color: "#F59E0B",
        features: ["游戏素材", "动漫风格", "高清生成"],
        platforms: ["网页"],
        pricing: "免费试用，订阅付费",
        rating: 4.7,
        highlights: "专为游戏开发者设计"
    },
    {
        id: 142,
        name: "Runway ML",
        description: "AI视频编辑和生成工具",
        category: "video",
        tags: ["AI视频", "视频编辑"],
        url: "https://runwayml.com/",
        color: "#3B82F6",
        features: ["视频生成", "画面修复", "AI特效"],
        platforms: ["网页"],
        pricing: "免费试用，订阅付费",
        rating: 4.6,
        highlights: "专业级AI视频工具"
    },
    {
        id: 143,
        name: "Pika Labs",
        description: "AI视频生成和动画创作工具",
        category: "video",
        tags: ["AI视频", "动画"],
        url: "https://pika.art/",
        color: "#EC4899",
        features: ["文本转视频", "图像动起来", "风格转换"],
        platforms: ["网页"],
        pricing: "免费试用，订阅付费",
        rating: 4.8,
        highlights: "革命性的AI视频生成技术"
    },
    {
        id: 144,
        name: "Synthesia",
        description: "AI视频生成和数字人工具",
        category: "video",
        tags: ["AI视频", "数字人"],
        url: "https://www.synthesia.io/",
        color: "#6366F1",
        features: ["AI数字人", "多语言配音", "视频模板"],
        platforms: ["网页"],
        pricing: "订阅付费",
        rating: 4.7,
        highlights: "无需拍摄，AI生成专业视频"
    },
    {
        id: 145,
        name: "GitHub Copilot",
        description: "AI代码助手，实时代码补全",
        category: "programming",
        tags: ["AI编程", "代码补全"],
        url: "https://github.com/copilot",
        color: "#22D3EE",
        features: ["代码补全", "代码解释", "测试生成"],
        platforms: ["VS Code", "JetBrains", "Neovim"],
        pricing: "订阅付费",
        rating: 4.8,
        highlights: "最流行的AI编程助手"
    },
    {
        id: 146,
        name: "CodeLlama",
        description: "Meta开源的代码生成模型",
        category: "programming",
        tags: ["AI编程", "开源"],
        url: "https://ai.meta.com/research/publications/codellama/",
        color: "#10B981",
        features: ["代码生成", "代码理解", "多语言"],
        platforms: ["本地部署"],
        pricing: "免费开源",
        rating: 4.6,
        highlights: "完全开源，可本地运行"
    },
    {
        id: 147,
        name: "Cursor",
        description: "AI优先的代码编辑器",
        category: "programming",
        tags: ["AI编程", "编辑器"],
        url: "https://www.cursor.so/",
        color: "#F97316",
        features: ["AI代码生成", "代码修复", "文档生成"],
        platforms: ["Windows", "macOS", "Linux"],
        pricing: "免费版可用，Pro版付费",
        rating: 4.7,
        highlights: "专为AI辅助编程设计"
    },
    {
        id: 148,
        name: "Figma AI",
        description: "AI驱动的UI设计工具",
        category: "design",
        tags: ["AI设计", "UI设计"],
        url: "https://www.figma.com/",
        color: "#F59E0B",
        features: ["AI生成设计", "自动布局", "设计系统"],
        platforms: ["网页"],
        pricing: "免费版可用，专业版付费",
        rating: 4.9,
        highlights: "设计行业标准工具"
    },
    {
        id: 149,
        name: "Canva AI",
        description: "AI驱动的图形设计平台",
        category: "design",
        tags: ["AI设计", "平面设计"],
        url: "https://www.canva.com/",
        color: "#22D3EE",
        features: ["AI图像生成", "模板设计", "协作"],
        platforms: ["网页", "iOS", "Android"],
        pricing: "免费版可用，Pro版付费",
        rating: 4.8,
        highlights: "适合非专业设计师"
    },
    {
        id: 150,
        name: "Adobe Firefly",
        description: "Adobe官方AI创意工具",
        category: "design",
        tags: ["AI设计", "Adobe"],
        url: "https://firefly.adobe.com/",
        color: "#EC4899",
        features: ["文本转图像", "矢量重绘", "字体效果"],
        platforms: ["网页", "Creative Cloud"],
        pricing: "免费试用，订阅付费",
        rating: 4.7,
        highlights: "与Adobe生态无缝集成"
    },
    {
        id: 151,
        name: "Suno AI",
        description: "AI音乐生成工具",
        category: "audio",
        tags: ["AI音乐", "音乐生成"],
        url: "https://suno.com/",
        color: "#6366F1",
        features: ["文本生成音乐", "歌词创作", "风格多样"],
        platforms: ["网页"],
        pricing: "免费试用，订阅付费",
        rating: 4.7,
        highlights: "高品质AI音乐生成"
    },
    {
        id: 152,
        name: "ElevenLabs",
        description: "AI语音合成工具",
        category: "audio",
        tags: ["AI语音", "配音"],
        url: "https://elevenlabs.io/",
        color: "#8B5CF6",
        features: ["逼真语音", "多语言", "语音克隆"],
        platforms: ["网页", "API"],
        pricing: "免费试用，订阅付费",
        rating: 4.8,
        highlights: "最逼真的AI语音合成"
    },
    {
        id: 153,
        name: "Descript",
        description: "AI音频和视频编辑工具",
        category: "audio",
        tags: ["AI音频", "播客"],
        url: "https://www.descript.com/",
        color: "#3B82F6",
        features: ["文字编辑音频", "AI降噪", "自动字幕"],
        platforms: ["macOS", "Windows"],
        pricing: "免费试用，订阅付费",
        rating: 4.7,
        highlights: "革命性的音频编辑体验"
    },
    {
        id: 154,
        name: "LangChain",
        description: "AI应用开发框架",
        category: "framework",
        tags: ["AI框架", "开发"],
        url: "https://www.langchain.com/",
        color: "#10B981",
        features: ["LLM集成", "数据连接", "代理开发"],
        platforms: ["Python", "JavaScript"],
        pricing: "免费开源",
        rating: 4.8,
        highlights: "构建AI应用的标准框架"
    },
    {
        id: 155,
        name: "LlamaIndex",
        description: "LLM数据框架",
        category: "framework",
        tags: ["AI框架", "数据"],
        url: "https://www.llamaindex.ai/",
        color: "#F59E0B",
        features: ["数据索引", "查询引擎", "RAG"],
        platforms: ["Python", "TypeScript"],
        pricing: "免费开源",
        rating: 4.6,
        highlights: "专注于RAG和数据检索"
    },
    {
        id: 156,
        name: "OpenAI API",
        description: "GPT模型API接口",
        category: "framework",
        tags: ["AI API", "OpenAI"],
        url: "https://platform.openai.com/",
        color: "#10B981",
        features: ["GPT-4", "DALL-E", "Whisper"],
        platforms: ["API"],
        pricing: "按量付费",
        rating: 4.9,
        highlights: "最强大的AI API平台"
    },
    {
        id: 157,
        name: "Hugging Face",
        description: "AI模型分享平台",
        category: "model",
        tags: ["AI模型", "开源"],
        url: "https://huggingface.co/",
        color: "#EC4899",
        features: ["模型库", "模型训练", "部署"],
        platforms: ["网页", "API"],
        pricing: "免费",
        rating: 4.8,
        highlights: "最大的开源AI模型社区"
    },
    {
        id: 158,
        name: "LLaMA",
        description: "Meta开源的大语言模型",
        category: "model",
        tags: ["AI模型", "开源"],
        url: "https://ai.meta.com/llama/",
        color: "#10B981",
        features: ["大语言模型", "开源", "多语言"],
        platforms: ["本地部署"],
        pricing: "免费商用",
        rating: 4.8,
        highlights: "Meta的开源大模型"
    },
    {
        id: 159,
        name: "GPT-4",
        description: "OpenAI的旗舰大语言模型",
        category: "model",
        tags: ["AI模型", "OpenAI"],
        url: "https://openai.com/gpt-4",
        color: "#10B981",
        features: ["多模态", "高级推理", "代码"],
        platforms: ["API", "ChatGPT"],
        pricing: "付费",
        rating: 4.9,
        highlights: "目前最强大的LLM之一"
    },
    {
        id: 160,
        name: "Originality.ai",
        description: "AI内容检测工具",
        category: "detection",
        tags: ["AI检测", "原创性"],
        url: "https://originality.ai/",
        color: "#6366F1",
        features: ["AI检测", "抄袭检测", "写作分析"],
        platforms: ["网页", "API"],
        pricing: "订阅付费",
        rating: 4.6,
        highlights: "专业级AI内容检测"
    },
    {
        id: 161,
        name: "GPTZero",
        description: "AI生成内容检测工具",
        category: "detection",
        tags: ["AI检测", "教育"],
        url: "https://gptzero.me/",
        color: "#3B82F6",
        features: ["AI检测", "写作风格分析", "教育专用"],
        platforms: ["网页"],
        pricing: "免费版可用，Pro版付费",
        rating: 4.5,
        highlights: "专为教育场景设计"
    },
    {
        id: 162,
        name: "ChatGPT Detector",
        description: "OpenAI官方AI内容检测",
        category: "detection",
        tags: ["AI检测", "OpenAI"],
        url: "https://platform.openai.com/ai-text-classifier",
        color: "#10B981",
        features: ["AI检测", "概率评分"],
        platforms: ["网页"],
        pricing: "免费",
        rating: 4.4,
        highlights: "OpenAI官方检测工具"
    },
    {
        id: 163,
        name: "PromptPerfect",
        description: "AI提示词优化工具",
        category: "prompt",
        tags: ["提示词", "优化"],
        url: "https://promptperfect.jina.ai/",
        color: "#F59E0B",
        features: ["提示词优化", "多模型适配", "分析"],
        platforms: ["网页", "API"],
        pricing: "免费试用，订阅付费",
        rating: 4.6,
        highlights: "让你的提示词更有效"
    },
    {
        id: 164,
        name: "PromptBase",
        description: "提示词市场和社区",
        category: "prompt",
        tags: ["提示词", "市场"],
        url: "https://promptbase.com/",
        color: "#EC4899",
        features: ["提示词市场", "出售提示词", "发现"],
        platforms: ["网页"],
        pricing: "按需购买",
        rating: 4.5,
        highlights: "最大的提示词交易平台"
    },
    {
        id: 165,
        name: "AutoGPT",
        description: "自主AI代理，能完成复杂任务",
        category: "agent",
        tags: ["AI代理", "自主"],
        url: "https://github.com/Significant-Gravitas/AutoGPT",
        color: "#6366F1",
        features: ["自主思考", "多步骤任务", "工具使用"],
        platforms: ["本地部署"],
        pricing: "免费开源",
        rating: 4.7,
        highlights: "AI自主代理的先驱"
    },
    {
        id: 166,
        name: "Agent Info",
        description: "AI智能体平台",
        category: "agent",
        tags: ["AI代理", "工作流"],
        url: "https://agent.info/",
        color: "#8B5CF6",
        features: ["AI工作流", "自动化", "多工具"],
        platforms: ["网页"],
        pricing: "免费试用，订阅付费",
        rating: 4.6,
        highlights: "可视化AI工作流"
    },
    {
        id: 167,
        name: "Notion AI",
        description: "AI增强的笔记和协作工具",
        category: "office",
        tags: ["AI办公", "笔记"],
        url: "https://www.notion.so/",
        color: "#22D3EE",
        features: ["AI写作", "总结", "问答"],
        platforms: ["网页", "iOS", "Android"],
        pricing: "免费版可用，Pro版付费",
        rating: 4.8,
        highlights: "将AI融入笔记体验"
    },
    {
        id: 168,
        name: "Microsoft 365 Copilot",
        description: "Office套件中的AI助手",
        category: "office",
        tags: ["AI办公", "微软"],
        url: "https://www.microsoft.com/en-us/microsoft-365/copilot",
        color: "#3B82F6",
        features: ["Word AI", "Excel AI", "PowerPoint AI"],
        platforms: ["Windows", "macOS"],
        pricing: "订阅付费",
        rating: 4.7,
        highlights: "深度集成Office套件"
    },
    {
        id: 169,
        name: "Grammarly",
        description: "AI写作辅助和语法检查",
        category: "office",
        tags: ["AI写作", "语法"],
        url: "https://www.grammarly.com/",
        color: "#EC4899",
        features: ["语法检查", "风格建议", "AI改写"],
        platforms: ["网页", "浏览器扩展", "桌面"],
        pricing: "免费版可用，Premium付费",
        rating: 4.8,
        highlights: "最流行的写作辅助工具"
    },
    {
        id: 170,
        name: "AI Classroom",
        description: "AI驱动的在线学习平台",
        category: "learning",
        tags: ["AI学习", "教育"],
        url: "https://www.aiclassroom.io/",
        color: "#6366F1",
        features: ["个性化学习", "AI辅导", "进度追踪"],
        platforms: ["网页"],
        pricing: "免费试用，订阅付费",
        rating: 4.6,
        highlights: "AI个性化教育"
    }
];

let currentCategory = 'all';
let searchQuery = '';
let searchTimeout = null;

const toolsGrid = document.getElementById('toolsGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sideNavMenu = document.getElementById('sideNavMenu');
const categoryTabsContainer = document.getElementById('categoryTabs');

function renderSideNav() {
    if (!sideNavMenu) return;
    sideNavMenu.innerHTML = config.categories.map((category, index) => `
        <button class="side-nav-item ${index === 0 ? 'active' : ''}" data-category="${category.id}">
            <i data-lucide="${category.icon}"></i>
            <span>${category.name}</span>
        </button>
    `).join('');
    lucide.createIcons();
}

function renderCategoryTabs() {
    if (!categoryTabsContainer) return;
    categoryTabsContainer.innerHTML = config.categories.map((category, index) => `
        <button class="category-tab ${index === 0 ? 'active' : ''}" data-category="${category.id}">
            <span>${config.categoryTabNames[category.id] || category.name}</span>
            <span class="tab-count" id="count-${category.id}">0</span>
        </button>
    `).join('');
}

function getCategoryCount(category) {
    if (category === 'all') return tools.length;
    return tools.filter(t => t.category === category).length;
}

function updateCategoryCounts() {
    config.categories.forEach(category => {
        const countEl = document.getElementById(`count-${category.id}`);
        if (countEl) {
            countEl.textContent = getCategoryCount(category.id);
        }
    });
}

function getInitials(name) {
    return name.charAt(0).toUpperCase();
}

function filterTools() {
    let filtered = tools;

    if (currentCategory !== 'all') {
        filtered = filtered.filter(t => t.category === currentCategory);
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(t =>
            t.name.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query) ||
            t.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }

    return filtered;
}

function renderTools() {
    if (!toolsGrid || !emptyState) return;
    
    const filtered = filterTools();

    if (filtered.length === 0) {
        toolsGrid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    toolsGrid.innerHTML = filtered.map((tool, index) => `
        <a href="detail.html?id=${tool.id}" class="tool-card" style="animation-delay: ${index * 30}ms">
            <div class="tool-icon" style="background: ${tool.color}">
                ${getInitials(tool.name)}
            </div>
            <h3 class="tool-name">${tool.name}</h3>
            <p class="tool-desc">${tool.description}</p>
            <div class="tool-tags">
                ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
            </div>
            <div class="tool-action">
                <i data-lucide="arrow-right"></i>
            </div>
        </a>
    `).join('');
}

function setActiveCategory(tab) {
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.dataset.category;
    renderTools();
}

function bindCategoryEvents() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => setActiveCategory(tab));
    });
}

function bindSideNavEvents() {
    const sideNav = document.getElementById('sideNav');
    const sideNavToggle = document.getElementById('sideNavToggle');
    const sideNavItems = document.querySelectorAll('.side-nav-item');

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function handleResize() {
        if (sideNav && isMobile()) {
            sideNav.classList.remove('collapsed');
        }
    }

    if (sideNavToggle && sideNav) {
        sideNavToggle.addEventListener('click', () => {
            if (isMobile()) {
                return;
            }
            sideNav.classList.toggle('collapsed');
            const icon = sideNavToggle.querySelector('i');
            if (icon) {
                if (sideNav.classList.contains('collapsed')) {
                    icon.setAttribute('data-lucide', 'chevron-right');
                } else {
                    icon.setAttribute('data-lucide', 'chevron-left');
                }
                lucide.createIcons();
            }
        });
    }

    window.addEventListener('resize', handleResize);

    if (sideNav) {
        sideNavItems.forEach(item => {
            item.addEventListener('click', () => {
                sideNavItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                const category = item.dataset.category;
                const categoryTabs = document.querySelectorAll('.category-tab');
                categoryTabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.dataset.category === category) {
                        tab.classList.add('active');
                    }
                });
                currentCategory = category;
                renderTools();

                if (window.innerWidth <= 768) {
                    sideNav.classList.remove('mobile-open');
                    const mobileOverlay = document.getElementById('mobileOverlay');
                    if (mobileOverlay) mobileOverlay.classList.remove('active');
                    document.body.classList.remove('mobile-nav-open');
                }
            });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                sideNav.classList.add('sticky');
            } else {
                sideNav.classList.remove('sticky');
            }
        });
    }
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.trim();
            renderTools();
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSideNav();
    renderCategoryTabs();
    updateCategoryCounts();
    bindCategoryEvents();
    bindSideNavEvents();
    renderTools();
    
    // 延迟初始化 lucide 图标，确保 DOM 完全就绪
    setTimeout(() => {
        try {
            lucide.createIcons();
        } catch (e) {
            console.warn('Lucide icons initialization error:', e);
        }
    }, 100);
});

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sideNav = document.getElementById('sideNav');
const mobileOverlay = document.getElementById('mobileOverlay');

if (mobileMenuBtn && sideNav && mobileOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
        sideNav.classList.toggle('mobile-open');
        mobileOverlay.classList.toggle('active');
        document.body.classList.toggle('mobile-nav-open');
    });
}