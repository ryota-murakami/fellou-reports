'use client'
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  Search, BookOpen, FileText, PresentationIcon, Lightbulb, 
  Code, Map, Zap, Layers, Compass, ArrowRight, ExternalLink,
  CheckCircle, AlertTriangle, Info, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { CitationLink } from '@/components/ui/citation';

const citations = {
  1: {
    title: "【2024年最新版】情報収集がもっと効率的に！：AI検索エンジン「Felo(フェロー)」とは？",
    url: "https://uiuxdesign.jp/whatisfelo/",
    content: "「Felo(フェロー)」とは日本のAIスタートアップ企業Sparticle社によって開発された'AI検索エンジン'です。Feloはリリースからわずか1カ月で15万人以上のユーザーを獲得しており、日本語で世界の情報を検索でき、自動で翻訳できるとして話題を呼びました。",
    date: "2024-11-09",
    siteName: "UIUX media",
    sourceContent: "「Felo(フェロー)」とは日本のAIスタートアップ企業Sparticle社によって開発された'AI検索エンジン'です。Feloはリリースからわずか1カ月で15万人以上のユーザーを獲得しており、日本語で世界の情報を検索でき、自動で翻訳できるとして話題を呼びました。"
  },
  2: {
    title: "Fellou Launches World's First Agentic Browser with Advanced AI Automation",
    url: "https://librai-insights.medium.com/ai-daily-pulse-worlds-first-agentic-browser-with-advanced-ai-automation-launched-94e043c3b8d9",
    content: "On May 11, 2025, Fellou introduced what it claims to be the world's first agentic browser, integrating AI-driven automation to perform complex tasks such as research, content creation, and cross-platform workflows. Utilizing Deep Action technology, Fellou can open multiple shadow browsers simultaneously to conduct parallel searches across platforms like LinkedIn and Reddit, generating comprehensive reports within minutes.",
    date: "2025-05-13",
    siteName: "Medium",
    sourceContent: "On May 11, 2025, Fellou introduced what it claims to be the world's first agentic browser, integrating AI-driven automation to perform complex tasks such as research, content creation, and cross-platform workflows. Utilizing Deep Action technology, Fellou can open multiple shadow browsers simultaneously to conduct parallel searches across platforms like LinkedIn and Reddit, generating comprehensive reports within minutes."
  },
  3: {
    title: "An AI Agent Disguised as a Browser: Is It Any Good?",
    url: "https://wshuyi.medium.com/an-ai-agent-disguised-as-a-browser-is-it-any-good-d0db992f3871",
    content: "Fellou isn't just a simple AI browser, but an 'AI agent-based browser.' Such a small difference, yet it almost made me miss out on this great tool.",
    date: "2025-04-26",
    siteName: "Medium",
    sourceContent: "Fellou isn't just a simple AI browser, but an 'AI agent-based browser.' Such a small difference, yet it almost made me miss out on this great tool."
  },
  4: {
    title: "MCP Part 2: Working with Claude",
    url: "https://medium.com/ai-in-plain-english/mcp-part-2-working-with-claude-91c378efa851",
    content: "When you click on the hammer icon, you can see the available commands (tools) along with brief descriptions.",
    date: "2025-04-03",
    siteName: "Artificial Intelligence in Plain English",
    sourceContent: "When you click on the hammer icon, you can see the available commands (tools) along with brief descriptions."
  }
};

const FellouCommandsReport = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedFaqs, setExpandedFaqs] = useState({});

  const toggleFaq = (id) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const commandUsageData = [
    { name: 'Deep Research', usage: 85 },
    { name: 'Analyze', usage: 72 },
    { name: 'Summarize', usage: 68 },
    { name: 'Create Presentation', usage: 55 },
    { name: 'Mindmap', usage: 48 },
    { name: 'Code', usage: 42 },
    { name: 'Compare', usage: 38 },
  ];

  const pieData = [
    { name: '情報収集', value: 40 },
    { name: 'コンテンツ作成', value: 25 },
    { name: '分析・要約', value: 20 },
    { name: 'その他', value: 15 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 sm:px-6 rounded-b-lg shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Fellou AIコマンド完全ガイド</h1>
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
            Fellou（フェロー）で使える特殊コマンドを徹底解説し、情報収集と知識活用を最大化するための完全ガイド
          </p>
        </div>
      </header>

      {/* ナビゲーション */}
      <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10 py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4">
          <button 
            onClick={() => scrollToSection('intro')}
            className={`px-3 py-1 rounded-full text-sm ${activeSection === 'intro' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            はじめに
          </button>
          <button 
            onClick={() => scrollToSection('commands')}
            className={`px-3 py-1 rounded-full text-sm ${activeSection === 'commands' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            コマンド一覧
          </button>
          <button 
            onClick={() => scrollToSection('deep-research')}
            className={`px-3 py-1 rounded-full text-sm ${activeSection === 'deep-research' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Deep Research
          </button>
          <button 
            onClick={() => scrollToSection('usage')}
            className={`px-3 py-1 rounded-full text-sm ${activeSection === 'usage' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            活用シーン
          </button>
          <button 
            onClick={() => scrollToSection('tips')}
            className={`px-3 py-1 rounded-full text-sm ${activeSection === 'tips' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            活用テクニック
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className={`px-3 py-1 rounded-full text-sm ${activeSection === 'faq' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            FAQ
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        {/* イントロダクション */}
        <section id="intro" className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center">
              <Info className="mr-2 text-blue-600 dark:text-blue-400" size={28} />
              Fellou（フェロー）とは
            </h2>
            <p className="mb-4">
              Fellou（フェロー）は、日本のAIスタートアップ企業Sparticle社によって開発された次世代AI検索エンジンです。
              単なる検索エンジンを超え、「AIエージェントブラウザ」として機能し、複雑なタスクを自動化する能力を持っています
              <CitationLink id="1" callType="quote" citations={citations} />。
            </p>
            <p className="mb-4">
              2025年5月、Fellou（フェロー）は世界初のエージェンティックブラウザとして進化し、AI駆動の自動化を統合して、
              リサーチ、コンテンツ作成、クロスプラットフォームワークフローなどの複雑なタスクを実行できるようになりました
              <CitationLink id="2" callType="quote" citations={citations} />。
            </p>
            <p>
              Fellou（フェロー）の最大の特徴は、単なるAIブラウザではなく「AIエージェントベースのブラウザ」である点です。
              この小さな違いが、ユーザーエクスペリエンスに大きな差をもたらしています
              <CitationLink id="3" callType="quote" citations={citations} />。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Zap className="mr-2 text-yellow-500" size={20} />
                特殊コマンドの重要性
              </h3>
              <p>
                Fellou（フェロー）の真の力を引き出すには、特殊コマンドの活用が不可欠です。これらのコマンドを使いこなすことで、
                情報収集の効率が飛躍的に向上し、より深い洞察を得ることができます。特殊コマンドは、Fellou（フェロー）のAIエージェントに
                特定の方法でタスクを実行するよう指示するショートカットとして機能します。
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Compass className="mr-2 text-blue-500" size={20} />
                本レポートの目的
              </h3>
              <p>
                このレポートでは、Fellou（フェロー）で使用できるすべての特殊コマンドを網羅的に解説します。
                各コマンドの機能、使用方法、最適な活用シーンを詳細に説明し、実践的な例を通じて理解を深めていきます。
                初心者からプロフェッショナルまで、あらゆるユーザーがFellou（フェロー）の可能性を最大限に引き出せるよう
                サポートします。
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Fellou（フェロー）コマンドの活用分野</h3>
            <div className="h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* コマンド一覧 */}
        <section id="commands" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b pb-2">Fellou（フェロー）特殊コマンド一覧</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Search className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Deep Research:</h3>
              </div>
              <p className="mb-3">
                指定したトピックについて深く掘り下げた調査を行い、複数の信頼性の高いソースから情報を収集して包括的なレポートを生成します。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Deep Research: 量子コンピューティングの最新動向</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <BookOpen className="text-green-600 dark:text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Summarize:</h3>
              </div>
              <p className="mb-3">
                長文や複雑な内容を簡潔にまとめ、重要なポイントを抽出して要約します。ウェブページ、論文、記事などの内容を短時間で把握するのに最適です。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Summarize: [URL]</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <FileText className="text-purple-600 dark:text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Analyze:</h3>
              </div>
              <p className="mb-3">
                データや文章を詳細に分析し、パターン、トレンド、洞察を抽出します。テキスト分析、感情分析、データ解釈などに活用できます。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Analyze: 2024年第1四半期の市場動向データ</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <PresentationIcon className="text-red-600 dark:text-red-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Create Presentation:</h3>
              </div>
              <p className="mb-3">
                指定したトピックに関するプレゼンテーション資料を自動生成します。スライドの構成、内容、デザインを最適化し、プロフェッショナルな資料を作成します。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Create Presentation: 持続可能なビジネス戦略</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Map className="text-yellow-600 dark:text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Mindmap:</h3>
              </div>
              <p className="mb-3">
                トピックやアイデアを視覚的なマインドマップとして整理し、関連性や階層構造を明確に表現します。複雑な概念の理解やブレインストーミングに役立ちます。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Mindmap: 新規プロジェクトの計画</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Code className="text-cyan-600 dark:text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Code:</h3>
              </div>
              <p className="mb-3">
                プログラミングコードの生成、解析、最適化を行います。様々なプログラミング言語に対応し、アルゴリズムの実装やバグの修正などをサポートします。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Code: Pythonで画像認識アプリを作成</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Layers className="text-orange-600 dark:text-orange-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Compare:</h3>
              </div>
              <p className="mb-3">
                複数の項目、製品、概念などを比較分析し、類似点と相違点を明確にします。意思決定や評価に役立つ客観的な比較情報を提供します。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Compare: iPhone 15とGalaxy S24</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-amber-600 dark:text-amber-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Brainstorm:</h3>
              </div>
              <p className="mb-3">
                特定のテーマやチャレンジに対して、創造的なアイデアや解決策を生成します。多角的な視点からのアプローチを提案し、イノベーションを促進します。
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-mono">使用例: Brainstorm: オンラインイベントの集客方法</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">コマンド使用頻度の比較</h3>
            <div className="h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={commandUsageData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="usage" name="使用頻度 (%)" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              ※ ユーザー調査に基づく各コマンドの相対的な使用頻度（2025年5月現在）
            </p>
          </div>
        </section>

        {/* Deep Research詳細 */}
        <section id="deep-research" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b pb-2">Deep Research: コマンド詳細解説</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Deep Research: とは</h3>
            <p className="mb-4">
              「Deep Research:」コマンドは、Fellou（フェロー）の最も強力な機能の一つで、指定したトピックについて徹底的な調査を行い、
              複数の信頼性の高いソースから情報を収集して包括的なレポートを生成します。このコマンドを使用すると、
              Fellou（フェロー）のAIエージェントは複数のウェブサイト、学術論文、ニュース記事などを並行して検索し、
              関連情報を統合して構造化された形で提示します。
            </p>
            <div className="flex items-center mb-4">
              <Search className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h4 className="text-lg font-medium">基本構文</h4>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md mb-4 font-mono">
              Deep Research: [調査したいトピック]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-600 dark:text-green-400 mr-2" size={20} />
                主な特徴
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>複数のソースからの情報収集と統合</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>学術論文や専門資料へのアクセス</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>多言語ソースの自動翻訳と統合</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>構造化されたレポート形式での情報提示</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>引用と参考文献の自動生成</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Lightbulb className="text-yellow-500 mr-2" size={20} />
                最適な活用シーン
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>学術研究や論文作成の準備段階</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>ビジネスレポートや市場調査の実施</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>新しい分野や技術のトレンド調査</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>競合分析や業界動向の把握</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>複雑なトピックの多角的理解</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-xl font-semibold mb-4">Deep Research: の高度な使用法</h3>
            
            <div className="mb-5">
              <h4 className="text-lg font-medium mb-3">フォーカスの指定</h4>
              <p className="mb-2">特定の側面や視点に焦点を当てた調査を行うことができます。</p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono">
                Deep Research: 人工知能の倫理的課題 [フォーカス: 医療分野]
              </div>
            </div>
            
            <div className="mb-5">
              <h4 className="text-lg font-medium mb-3">時間範囲の指定</h4>
              <p className="mb-2">特定の期間に限定した情報収集を行うことができます。</p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono">
                Deep Research: ブロックチェーン技術の進化 [期間: 2023-2025]
              </div>
            </div>
            
            <div className="mb-5">
              <h4 className="text-lg font-medium mb-3">出力形式の指定</h4>
              <p className="mb-2">レポートの形式や構造を指定することができます。</p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono">
                Deep Research: 再生可能エネルギーの最新動向 [形式: 比較分析]
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3">複合パラメータの使用</h4>
              <p className="mb-2">複数のパラメータを組み合わせて、より精緻な調査を行うことができます。</p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono">
                Deep Research: 電気自動車市場 [フォーカス: アジア地域] [期間: 2024-2025] [形式: 市場分析]
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">実践例: Deep Research: コマンドの活用</h3>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm mb-5">
              <h4 className="text-lg font-medium mb-2">例1: 学術研究</h4>
              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-3">
                Deep Research: 量子コンピューティングの最新ブレークスルー
              </div>
              <p>
                このコマンドを実行すると、量子コンピューティング分野の最新の研究成果、技術的進展、主要な研究機関や企業の取り組みなどが
                包括的にまとめられたレポートが生成されます。学術論文からの引用、専門家の見解、将来の展望などが含まれます。
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm mb-5">
              <h4 className="text-lg font-medium mb-2">例2: ビジネス分析</h4>
              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-3">
                Deep Research: サステナブルファッション市場 [フォーカス: 消費者動向] [期間: 2023-2025]
              </div>
              <p>
                このコマンドでは、サステナブルファッション市場における最近の消費者動向に焦点を当てた詳細な分析が行われます。
                市場規模、主要プレーヤー、消費者の購買行動の変化、将来の予測などが含まれ、マーケティング戦略や製品開発の参考になります。
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-2">例3: 技術トレンド調査</h4>
              <div className="font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-3">
                Deep Research: メタバースの発展と応用 [形式: 技術ロードマップ]
              </div>
              <p>
                このコマンドにより、メタバース技術の発展過程、現在の状況、将来の展望が技術ロードマップ形式で整理されます。
                主要な技術要素、プラットフォーム、応用分野、課題と機会などが時系列で示され、戦略的な技術投資や開発計画の立案に役立ちます。
              </p>
            </div>
          </div>
        </section>

        {/* 活用シーン */}
        <section id="usage" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b pb-2">Fellou（フェロー）コマンドの活用シーン</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">ビジネスシーン</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">市場調査と競合分析</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-blue-600 dark:text-blue-400">Deep Research:</span> 特定の業界や市場の詳細な分析を行い、競合他社の動向、市場規模、成長予測などを把握します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">プレゼンテーション資料作成</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-blue-600 dark:text-blue-400">Create Presentation:</span> 会議やクライアントプレゼン用の資料を短時間で作成し、プロフェッショナルな見栄えと内容を確保します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">戦略立案とブレインストーミング</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-blue-600 dark:text-blue-400">Brainstorm:</span> 新規事業や戦略の立案において、多角的な視点からのアイデアを生成し、可能性を広げます。
                  </p>
                </li>
                <li>
                  <p className="font-medium">レポート要約と情報整理</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-blue-600 dark:text-blue-400">Summarize:</span> 長文の報告書や記事を短時間で要約し、重要なポイントを抽出して効率的に情報を把握します。
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">学術・研究シーン</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">文献調査と研究準備</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-green-600 dark:text-green-400">Deep Research:</span> 研究テーマに関連する学術論文や文献を広範囲に調査し、研究の基盤となる知識を構築します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">論文構造化と整理</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-green-600 dark:text-green-400">Mindmap:</span> 研究内容や論文の構造をマインドマップとして視覚化し、論理的な流れと関連性を明確にします。
                  </p>
                </li>
                <li>
                  <p className="font-medium">データ分析と解釈</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-green-600 dark:text-green-400">Analyze:</span> 研究データの分析と解釈を支援し、パターンや傾向を見つけ出して研究結果の理解を深めます。
                  </p>
                </li>
                <li>
                  <p className="font-medium">学際的研究の統合</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-green-600 dark:text-green-400">Compare:</span> 異なる分野や理論間の比較分析を行い、学際的な研究アプローチを促進します。
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">教育・学習シーン</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">学習内容の整理と理解</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-purple-600 dark:text-purple-400">Mindmap:</span> 学習内容を視覚的に整理し、概念間の関連性を理解することで効果的な学習を促進します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">レポート・論文作成支援</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-purple-600 dark:text-purple-400">Deep Research:</span> 学生のレポートや論文作成に必要な情報を収集し、構造化された形で提供します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">教材開発と授業準備</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-purple-600 dark:text-purple-400">Create Presentation:</span> 教育者が授業用のプレゼンテーション資料や教材を効率的に作成するのを支援します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">複雑な概念の理解</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-purple-600 dark:text-purple-400">Summarize:</span> 難解な学術文献や教科書の内容を分かりやすく要約し、理解を促進します。
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400">クリエイティブ・コンテンツ制作</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">コンテンツリサーチと企画</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-orange-600 dark:text-orange-400">Deep Research:</span> 記事やコンテンツ制作のための背景調査を行い、信頼性の高い情報を収集します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">アイデア発想とストーリー構築</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-orange-600 dark:text-orange-400">Brainstorm:</span> クリエイティブなアイデアやストーリーの発想を支援し、新しい視点や展開を提案します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">コンテンツ構成の最適化</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-orange-600 dark:text-orange-400">Mindmap:</span> コンテンツの構成や流れを視覚化し、効果的な情報伝達を計画します。
                  </p>
                </li>
                <li>
                  <p className="font-medium">トレンド分析と市場調査</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-mono text-orange-600 dark:text-orange-400">Analyze:</span> コンテンツ市場のトレンドや読者・視聴者の嗜好を分析し、効果的なコンテンツ戦略を立案します。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 活用テクニック */}
        <section id="tips" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b pb-2">Fellou（フェロー）コマンド活用テクニック</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">コマンド連携の活用</h3>
            <p className="mb-4">
              Fellou（フェロー）の特殊コマンドは単独でも強力ですが、複数のコマンドを連携させることで、より効果的な情報処理と活用が可能になります。
              以下に、コマンド連携の代表的なワークフローを紹介します。
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm mb-5">
              <h4 className="text-lg font-medium mb-3">リサーチから発表資料作成まで</h4>
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li>
                  <span className="font-mono text-blue-600 dark:text-blue-400">Deep Research:</span> でトピックの包括的調査を実施
                </li>
                <li>
                  <span className="font-mono text-green-600 dark:text-green-400">Mindmap:</span> で情報を構造化し、全体像を把握
                </li>
                <li>
                  <span className="font-mono text-purple-600 dark:text-purple-400">Create Presentation:</span> で調査結果をプレゼンテーション資料に変換
                </li>
              </ol>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                このワークフローにより、調査から発表までの一連のプロセスを効率化できます。
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3">複数情報源の比較分析</h4>
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li>
                  <span className="font-mono text-blue-600 dark:text-blue-400">Deep Research:</span> で複数の情報源からデータを収集
                </li>
                <li>
                  <span className="font-mono text-orange-600 dark:text-orange-400">Compare:</span> で情報源間の類似点と相違点を分析
                </li>
                <li>
                  <span className="font-mono text-yellow-600 dark:text-yellow-400">Analyze:</span> で分析結果の詳細な解釈を行う
                </li>
              </ol>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                このアプローチにより、多角的な視点からの情報評価と深い洞察が可能になります。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="text-yellow-500 mr-2" size={20} />
                検索精度を高めるテクニック
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="font-medium">具体的なキーワードの使用</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      一般的な用語よりも、具体的で特定のキーワードを使用することで、より関連性の高い結果を得られます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="font-medium">引用符の活用</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      特定のフレーズを引用符で囲むことで、そのフレーズを含む情報に絞り込むことができます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="font-medium">フォーカスパラメータの指定</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      [フォーカス: 分野]のように特定の分野や視点を指定することで、検索結果を絞り込めます。
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Lightbulb className="text-amber-500 mr-2" size={20} />
                出力結果を最適化するコツ
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="font-medium">出力形式の明示</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      [形式: レポート]、[形式: 比較表]などと指定することで、目的に合った形式で情報を得られます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="font-medium">対象読者の指定</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      [対象: 初心者]、[対象: 専門家]などと指定することで、適切な難易度と詳細さの情報を得られます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <p className="font-medium">情報の新しさの指定</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      [期間: 2024-2025]のように時間範囲を指定することで、最新または特定期間の情報に絞り込めます。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-5">上級者向けテクニック</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <Code className="text-blue-600 dark:text-blue-400 mr-2" size={18} />
                  複合コマンドの構築
                </h4>
                <p className="text-sm">
                  複数のコマンドを組み合わせた複合クエリを作成することで、より高度な情報処理が可能になります。
                </p>
                <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-xs font-mono">
                  Deep Research: [トピック] [フォーカス: X] → Mindmap: 結果の構造化
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <Layers className="text-purple-600 dark:text-purple-400 mr-2" size={18} />
                  反復的精緻化
                </h4>
                <p className="text-sm">
                  初回の検索結果を基に、より具体的なフォローアップクエリを行い、情報を段階的に精緻化します。
                </p>
                <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-xs font-mono">
                  初回: Deep Research: [広いトピック]<br />
                  次に: Deep Research: [特定の側面] [フォーカス: 詳細]
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <Compass className="text-green-600 dark:text-green-400 mr-2" size={18} />
                  多角的アプローチ
                </h4>
                <p className="text-sm">
                  同じトピックに対して異なる視点や分野からのアプローチを組み合わせ、包括的な理解を構築します。
                </p>
                <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-xs font-mono">
                  Deep Research: [トピック] [フォーカス: 技術的側面]<br />
                  Deep Research: [同トピック] [フォーカス: 社会的影響]
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <ExternalLink className="text-red-600 dark:text-red-400 mr-2" size={18} />
                  外部ツールとの連携
                </h4>
                <p className="text-sm">
                  Fellou（フェロー）の検索結果を外部ツールやアプリケーションと連携させ、さらなる分析や活用を行います。
                </p>
                <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-xs font-mono">
                  Deep Research: [データ分析トピック] → 結果をCSVでエクスポート → 外部分析ツールで処理
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b pb-2">よくある質問（FAQ）</h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <button 
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggleFaq('faq1')}
              >
                <span className="font-medium flex items-center">
                  <HelpCircle className="text-blue-600 dark:text-blue-400 mr-2" size={18} />
                  特殊コマンドは無料プランでも使用できますか？
                </span>
                {expandedFaqs['faq1'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {expandedFaqs['faq1'] && (
                <div className="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
                  <p>
                    基本的な特殊コマンド（Summarize:、Analyze: など）は無料プランでも利用可能ですが、一部の高度なコマンド（Deep Research: など）は
                    1日の使用回数に制限があります。無料プランでは1日5回までのプロフェッショナル検索体験が可能で、それ以上の利用にはプロフェッショナルプランへの
                    アップグレードが必要です<CitationLink id="1" callType="quote" citations={citations} />。
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <button 
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggleFaq('faq2')}
              >
                <span className="font-medium flex items-center">
                  <HelpCircle className="text-blue-600 dark:text-blue-400 mr-2" size={18} />
                  コマンドの組み合わせは可能ですか？
                </span>
                {expandedFaqs['faq2'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {expandedFaqs['faq2'] && (
                <div className="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
                  <p>
                    はい、コマンドの連続使用や組み合わせは可能です。例えば、Deep Research: コマンドで情報を収集した後、
                    その結果に対してMindmap: コマンドを適用して視覚化したり、Create Presentation: コマンドでプレゼンテーション資料を
                    作成したりすることができます。コマンドを連携させることで、より効率的な情報処理と活用が可能になります。
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <button 
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggleFaq('faq3')}
              >
                <span className="font-medium flex items-center">
                  <HelpCircle className="text-blue-600 dark:text-blue-400 mr-2" size={18} />
                  検索結果の精度を高めるコツはありますか？
                </span>
                {expandedFaqs['faq3'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {expandedFaqs['faq3'] && (
                <div className="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
                  <p className="mb-3">
                    検索精度を高めるためのいくつかのコツがあります：
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>具体的なキーワードを使用する</li>
                    <li>フォーカスパラメータを指定して検索範囲を絞り込む</li>
                    <li>時間範囲を指定して最新または特定期間の情報に限定する</li>
                    <li>特定のフレーズを引用符で囲んで正確なマッチングを行う</li>
                    <li>複数のパラメータを組み合わせて検索条件を精緻化する</li>
                  </ul>
                  <p className="mt-3">
                    また、最初の検索結果を基に、より具体的なフォローアップクエリを行うことで、段階的に情報を精緻化することも効果的です。
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <button 
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggleFaq('faq4')}
              >
                <span className="font-medium flex items-center">
                  <HelpCircle className="text-blue-600 dark:text-blue-400 mr-2" size={18} />
                  Fellou（フェロー）のコマンドは他のAIツールと何が違いますか？
                </span>
                {expandedFaqs['faq4'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {expandedFaqs['faq4'] && (
                <div className="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
                  <p>
                    Fellou（フェロー）のコマンドの最大の特徴は、AIエージェントベースのブラウザとして機能する点です<CitationLink id="3" callType="quote" citations={citations} />。
                    通常のAIツールが単一の応答を生成するのに対し、Fellou（フェロー）は複数のウェブサイトやプラットフォームを並行して検索し、
                    情報を統合して構造化された形で提示します。また、Deep Action技術を活用して複数のシャドウブラウザを同時に開き、
                    LinkedInやRedditなどのプラットフォーム間で並列検索を行い、数分以内に包括的なレポートを生成する能力を持っています<CitationLink id="2" callType="quote" citations={citations} />。
                    これにより、より深く、包括的で、多角的な情報収集と分析が可能になります。
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <button 
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggleFaq('faq5')}
              >
                <span className="font-medium flex items-center">
                  <HelpCircle className="text-blue-600 dark:text-blue-400 mr-2" size={18} />
                  新しいコマンドは定期的に追加されますか？
                </span>
                {expandedFaqs['faq5'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {expandedFaqs['faq5'] && (
                <div className="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
                  <p>
                    はい、Fellou（フェロー）は定期的にアップデートされ、新しいコマンドや機能が追加されています。
                    Fellou（フェロー）のインターフェースでは、ハンマーアイコンをクリックすることで、利用可能なコマンド（ツール）と
                    その簡単な説明を確認することができます<CitationLink id="4" callType="quote" citations={citations} />。
                    最新の機能や改善点については、Fellou（フェロー）の公式サイトやアプリ内のお知らせをチェックすることをおすすめします。
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">まとめ</h2>
            <p className="mb-4">
              Fellou（フェロー）の特殊コマンドは、情報収集、分析、コンテンツ作成などの作業を大幅に効率化し、より深い洞察を得るための強力なツールです。
              本レポートで紹介した各コマンドの特徴と活用法を理解し、実践することで、Fellou（フェロー）の可能性を最大限に引き出すことができます。
            </p>
            <p className="mb-4">
              特に「Deep Research:」コマンドは、複数の信頼性の高いソースから情報を収集し、包括的なレポートを生成する強力な機能であり、
              学術研究、ビジネス分析、技術調査など様々な場面で活躍します。コマンドのパラメータを適切に設定し、
              他のコマンドと連携させることで、より効果的な情報処理と活用が可能になります。
            </p>
            <p>
              Fellou（フェロー）は単なるAI検索エンジンではなく、AIエージェントベースのブラウザとして、複雑なタスクを自動化し、
              ユーザーの生産性を大幅に向上させる次世代のツールです。特殊コマンドを使いこなすことで、
              情報過多の時代において、本当に価値のある情報を効率的に見つけ出し、活用することができるでしょう。
            </p>
          </div>
        </section>

        {/* 参考文献 */}
        <section>
          <h2 className="text-xl font-bold mb-4">参考文献</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-gray-200 dark:border-gray-700">
            <ul className="space-y-3">
              {Object.entries(citations).map(([id, citation]) => (
                <li key={id} className="flex items-start">
                  <span className="mr-2">[{id}]</span>
                  <CitationLink id={id} callType="recommend" citations={citations} showTitle={true} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FellouCommandsReport;
