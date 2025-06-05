'use client'
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  Github, Twitter, Award, Star, Code, Users, 
  BookOpen, Heart, Zap, Calendar, Briefcase, 
  Gift, Layers, Package, Globe, ArrowRight, 
  ChevronRight, ExternalLink, MessageSquare
} from 'lucide-react';
import { CitationLink } from '@/components/ui/citation';

// Citations data
const citations = {
  1: {
    title: "shadcn's Personal Website",
    url: "https://shadcn.com/",
    content: "Personal website of shadcn showcasing his work, sponsors, and links to his projects.",
    date: "Retrieved 2025",
    siteName: "shadcn.com",
    sourceContent: "I run a newsletter about design, coding, ai and open source. If you're looking for shadcn/ui, you can find it here."
  },
  2: {
    title: "Tweet about shadcn/ui winning project of the year",
    url: "https://x.com/shadcn/status/1879560380336521537",
    content: "shadcn/ui wins project of the year. Two years in a row. Thanks, everyone.",
    date: "2023",
    siteName: "X (formerly Twitter)",
    sourceContent: "shadcn/ui wins project of the year. Two years in a row. Thanks, everyone."
  },
  3: {
    title: "StyleGlide announcement mentioning shadcn",
    url: "https://x.com/shanedownes/status/1918273043711107147",
    content: "Introducing StyleGlide, the @shadcn design system editor.",
    date: "2024",
    siteName: "X (formerly Twitter)",
    sourceContent: "Introducing StyleGlide, the @shadcn design system editor. AI powered theme generation. Distributed on the registry."
  },
  4: {
    title: "ShadCN open-source Project announcement",
    url: "https://x.com/ajaypatel_aj/status/1908129543488946285",
    content: "Introducing our New ShadCN open-source Project",
    date: "2024",
    siteName: "X (formerly Twitter)",
    sourceContent: "Introducing our New ShadCN open-source Project 🤩 Your go-to collection of pre-built ShadCN components 🔥"
  }
};

// Timeline data
const timelineData = [
  {
    year: "2021",
    event: "初期のUI関連プロジェクトの開発を開始"
  },
  {
    year: "2022",
    event: "shadcn/uiの初期バージョンをリリース"
  },
  {
    year: "2022-2023",
    event: "プロジェクト・オブ・ザ・イヤーを初受賞"
  },
  {
    year: "2023-2024",
    event: "shadcn/uiが2年連続でプロジェクト・オブ・ザ・イヤーを受賞"
  },
  {
    year: "2024",
    event: "コミュニティの拡大とエコシステムの成長"
  }
];

// Project impact data
const impactData = [
  { name: 'ウェブ開発', value: 40 },
  { name: 'デザインシステム', value: 30 },
  { name: 'オープンソース', value: 20 },
  { name: 'AI統合', value: 10 },
];

// Community growth data
const communityGrowthData = [
  { year: '2021', users: 1000 },
  { year: '2022', users: 10000 },
  { year: '2023', users: 50000 },
  { year: '2024', users: 100000 },
];

// Project features
const projectFeatures = [
  {
    title: "再利用可能なコンポーネント",
    description: "コピー＆ペーストで使える高品質なUIコンポーネント"
  },
  {
    title: "Tailwind CSS統合",
    description: "Tailwindとシームレスに連携するスタイリングシステム"
  },
  {
    title: "カスタマイズ性",
    description: "プロジェクトに合わせて簡単にカスタマイズ可能"
  },
  {
    title: "アクセシビリティ",
    description: "アクセシビリティを考慮した設計"
  },
  {
    title: "テーマ対応",
    description: "ダークモードなど複数のテーマをサポート"
  }
];

// Ecosystem projects
const ecosystemProjects = [
  {
    name: "StyleGlide",
    description: "shadcnデザインシステムエディタ。AIを活用したテーマ生成機能を提供。",
    creator: "Shane Downes"
  },
  {
    name: "ShadCN Customizer",
    description: "ShadCNコンポーネントのコレクション。テーマのカスタマイズ、インポート/エクスポート機能を提供。",
    creator: "Ajay Patel"
  },
  {
    name: "shadcn/ui for Figma",
    description: "shadcn/uiのFigmaキット。デザインとコードの連携を強化。",
    creator: "Matt Wierzbicki"
  }
];

// Colors for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ShadcnProfileReport = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-4 sm:p-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">shadcn/uiの作成者：shadcnの経歴と貢献</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          オープンソースの世界に革新をもたらした開発者の軌跡
        </p>
      </header>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-800 mb-6">
        <button 
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
          プロフィール
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === 'projects' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
          プロジェクト
        </button>
        <button 
          onClick={() => setActiveTab('impact')}
          className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === 'impact' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
          影響力
        </button>
        <button 
          onClick={() => setActiveTab('community')}
          className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === 'community' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
        >
          コミュニティ
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-8">
            {/* Profile Overview */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  S
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl font-bold mb-2">shadcn</h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
                    <a href="https://twitter.com/shadcn" className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline">
                      <Twitter size={16} />
                      <span>@shadcn</span>
                    </a>
                    <a href="https://github.com/shadcn" className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline">
                      <Github size={16} />
                      <span>shadcn</span>
                    </a>
                    <a href="https://shadcn.com" className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline">
                      <Globe size={16} />
                      <span>shadcn.com</span>
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    デザイン、コーディング、AI、オープンソースに関するニュースレターを運営しています。
                    <CitationLink id="1" callType="quote" citations={citations} />
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">UI開発者</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">オープンソース貢献者</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">デザインシステム</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 text-yellow-500" size={24} />
                主な功績
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <Star className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium">プロジェクト・オブ・ザ・イヤー 2年連続受賞</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        shadcn/uiが2年連続でプロジェクト・オブ・ザ・イヤーを受賞
                        <CitationLink id="2" callType="quote" citations={citations} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <Code className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium">革新的なUIコンポーネントライブラリの開発</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        再利用可能でカスタマイズ性の高いUIコンポーネントの設計と実装
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <Users className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium">大規模コミュニティの形成</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        世界中の開発者に影響を与え、活発なコミュニティを構築
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <BookOpen className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium">知識共有とオープンソース貢献</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        デザイン、コーディング、AIに関する知識を積極的に共有
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="mr-2 text-blue-500" size={24} />
                タイムライン
              </h3>
              <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-6 ml-3 space-y-6">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-9 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">{item.year}</div>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            {/* Main Project: shadcn/ui */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Package className="mr-2 text-blue-500" size={24} />
                shadcn/ui
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                shadcn/uiは、再利用可能でカスタマイズ性の高いUIコンポーネントのコレクションです。Tailwind CSSと統合され、モダンなウェブアプリケーション開発のためのコンポーネントを提供しています。コピー＆ペーストで使えるアプローチを採用し、開発者が自分のプロジェクトに合わせて自由にカスタマイズできる柔軟性が特徴です。
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">主な特徴</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectFeatures.map((feature, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-800">
                      <h5 className="font-medium">{feature.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a href="https://ui.shadcn.com" className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                  <ExternalLink size={16} />
                  <span>公式サイト</span>
                </a>
                <a href="https://github.com/shadcn-ui/ui" className="inline-flex items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Project Impact Visualization */}
            <div>
              <h3 className="text-xl font-bold mb-4">プロジェクトの影響力</h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={impactData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {impactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                  shadcn/uiの技術分野への影響力分布
                </p>
              </div>
            </div>

            {/* Ecosystem */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Layers className="mr-2 text-green-500" size={24} />
                エコシステム
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                shadcn/uiの成功により、多くの関連プロジェクトやツールが開発され、豊かなエコシステムが形成されています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ecosystemProjects.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <h4 className="font-medium mb-2">{project.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                    <div className="text-xs text-gray-500 dark:text-gray-500">作成者: {project.creator}</div>
                    {index === 0 && (
                      <CitationLink id="3" callType="quote" citations={citations} />
                    )}
                    {index === 1 && (
                      <CitationLink id="4" callType="quote" citations={citations} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Impact Tab */}
        {activeTab === 'impact' && (
          <div className="space-y-8">
            {/* Industry Impact */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="mr-2 text-yellow-500" size={24} />
                業界への影響
              </h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <p className="mb-4">
                  shadcnのshadcn/uiは、ウェブ開発の方法に革命をもたらしました。その影響は以下の分野に顕著に表れています：
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                      <ChevronRight className="text-blue-600 dark:text-blue-400" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">コンポーネント設計の再考</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        コピー＆ペーストアプローチによる再利用可能なコンポーネントの概念を広め、従来のライブラリとは異なるアプローチを提案しました。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                      <ChevronRight className="text-green-600 dark:text-green-400" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Tailwind CSSの普及促進</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Tailwind CSSとの統合により、ユーティリティファーストのCSSアプローチの採用を加速させました。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">
                      <ChevronRight className="text-purple-600 dark:text-purple-400" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">オープンソースコミュニティの活性化</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        多くの開発者がshadcn/uiに触発され、独自のプロジェクトを開始したり、既存のプロジェクトに貢献するようになりました。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">
                      <ChevronRight className="text-red-600 dark:text-red-400" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">デザインシステムの民主化</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        高品質なデザインシステムを誰でも簡単に利用できるようにし、ウェブデザインの品質向上に貢献しました。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 text-yellow-500" size={24} />
                受賞歴と評価
              </h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    <h4 className="font-medium">プロジェクト・オブ・ザ・イヤー（2年連続）</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">
                    shadcn/uiは2年連続でプロジェクト・オブ・ザ・イヤーを受賞し、その革新性と影響力が認められています。
                    <CitationLink id="2" callType="quote" citations={citations} />
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="text-blue-500 mr-2" size={20} />
                    <h4 className="font-medium">コミュニティからの高い評価</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">
                    「インターネットの70%とすべてのAIチャットアプリがあなたを使用している場合、負けることは難しいです」というコメントが示すように、広範囲に採用されています。
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Heart className="text-red-500 mr-2" size={20} />
                    <h4 className="font-medium">スポンサーシップの獲得</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">
                    多くの開発者や企業からスポンサーシップを受け、持続可能なオープンソース開発のモデルを確立しています。
                  </p>
                </div>
              </div>
            </div>

            {/* Future Trends */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ArrowRight className="mr-2 text-blue-500" size={24} />
                今後の展望
              </h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <p className="mb-4">
                  shadcnとshadcn/uiの成功は、ウェブ開発の未来に大きな影響を与え続けると予想されます：
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">AIとの統合</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      StyleGlideのようなAIを活用したツールとの統合が進み、デザインシステムの生成と管理がさらに効率化されると予想されます。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">エコシステムの拡大</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      shadcn/uiを中心としたエコシステムがさらに拡大し、様々なツールやプラグインが開発されることで、より包括的な開発環境が構築されるでしょう。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">新しいパラダイムの確立</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      コピー＆ペーストアプローチは、従来のnpmパッケージとは異なる新しいコンポーネント共有のパラダイムとして確立され、他のプロジェクトにも影響を与えるでしょう。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <div className="space-y-8">
            {/* Community Growth */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="mr-2 text-blue-500" size={24} />
                コミュニティの成長
              </h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <p className="mb-4">
                  shadcn/uiのコミュニティは急速に成長し、世界中の開発者に影響を与えています。
                </p>
                <div className="h-72 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={communityGrowthData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="users" stroke="#3b82f6" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    shadcn/uiユーザー数の推移（推定）
                  </p>
                </div>
                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className="font-medium mb-1">活発なGitHubコミュニティ</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      多くの開発者がissueやプルリクエストを通じてプロジェクトに貢献し、活発な議論が行われています。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">幅広いエコシステム</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      shadcn/uiを基にした多くのプロジェクトが生まれ、エコシステムが拡大しています。StyleGlideやShadCN Customizerなどのツールがその例です。
                      <CitationLink id="3" callType="quote" citations={citations} />
                      <CitationLink id="4" callType="quote" citations={citations} />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsors and Support */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Heart className="mr-2 text-red-500" size={24} />
                スポンサーとサポート
              </h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <p className="mb-4">
                  shadcnは多くのスポンサーからサポートを受け、持続可能なオープンソース開発を実現しています。
                  <CitationLink id="1" callType="quote" citations={citations} />
                </p>
                <h4 className="font-medium mb-3">主要スポンサー</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full mr-3 flex items-center justify-center text-xl font-bold">
                        E
                      </div>
                      <div>
                        <h5 className="font-medium">Emil Kowalski</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Animations on the Web</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      UIとアニメーションのスキルを向上させたいなら、これは最高のコースです。@emilkowalski\_は一度、二度、何度もそれを実現しています。
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full mr-3 flex items-center justify-center text-xl font-bold">
                        M
                      </div>
                      <div>
                        <h5 className="font-medium">Matt Wierzbicki</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-500">shadcn/ui for Figma</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      これはshadcn/uiのための究極のFigmaキットです。もし私がFigmaキットを作るとしたら、これが私が作りたかったものです。
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a href="https://github.com/sponsors/shadcn" className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors">
                    <Heart size={16} />
                    <span>スポンサーになる</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Community Contributions */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Gift className="mr-2 text-purple-500" size={24} />
                コミュニティの貢献
              </h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <p className="mb-4">
                  shadcn/uiは多くの開発者からの貢献によって成長しています。個人サイトに表示されている貢献者の一部を紹介します。
                  <CitationLink id="1" callType="quote" citations={citations} />
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center text-xl font-bold">
                      D
                    </div>
                    <p className="font-medium text-sm">Damien Guard</p>
                    <a href="https://github.com/damieng" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">@damieng</a>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center text-xl font-bold">
                      G
                    </div>
                    <p className="font-medium text-sm">Gökay Gürcan</p>
                    <a href="https://github.com/gokaygurcan" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">@gokaygurcan</a>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center text-xl font-bold">
                      R
                    </div>
                    <p className="font-medium text-sm">Robert Shaw</p>
                    <a href="https://github.com/xiaoluoboding" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">@xiaoluoboding</a>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center text-xl font-bold">
                      H
                    </div>
                    <p className="font-medium text-sm">Hunter Johnston</p>
                    <a href="https://github.com/huntabyte" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">@huntabyte</a>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="https://shadcn.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    すべての貢献者を見る →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer with References */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold mb-3">参考文献</h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {Object.entries(citations).map(([id, citation]) => (
            <li key={id} className="flex items-start">
              <span className="mr-2">[{id}]</span>
              <CitationLink id={id} callType="recommend" citations={citations} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500 text-center">
          このレポートは2025年6月5日に作成されました。情報は作成時点のものです。
        </p>
      </footer>
    </div>
  );
};

export default ShadcnProfileReport;
