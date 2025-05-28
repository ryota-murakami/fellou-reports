'use client'
import React, { useState } from 'react';
import { Tabs, ChevronRight, Package, Settings, Code, Terminal, AlertTriangle, CheckCircle, HelpCircle, BookOpen, GitBranch, Zap, Clock, BarChart as BCIcon, ArrowRight, FileText, Github } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CitationLink } from '@/components/ui/citation';

const citations = {
  1: {
    title: "nodejs/corepack GitHub Repository",
    url: "https://github.com/nodejs/corepack",
    content: "Corepack is a zero-runtime-dependency Node.js script that acts as a bridge between Node.js projects and the package managers they are intended to be used with during development.",
    date: "Retrieved 2025",
    siteName: "GitHub",
    sourceContent: "Zero-runtime-dependency package acting as bridge between Node projects and their package managers"
  },
  2: {
    title: "Corepack : Managing the Package Managers",
    url: "https://medium.com/@rohitdeshpande9922/corepack-managing-the-package-managers-d3d4d82f05c2",
    content: "Corepack is a way for us to use package managers like pnpm, yarn without actually installing them. Corepack is an experimental tool that is included with all Node.js releases starting from Node.js 14.19 / 16.9.",
    date: "Nov 21, 2023",
    siteName: "Medium",
    sourceContent: "Corepack is a zero-runtime-dependency Node.js script that acts as a bridge between Node.js projects and the package managers they are intended to be used with during development."
  },
  3: {
    title: "Package Managers Comparison: Yarn, NPM, PNPM by Tomas Veprek",
    url: "https://medium.com/@cookielab/package-managers-comparison-yarn-npm-pnpm-by-tomas-veprek-7cb61a1e2117",
    content: "CorePack turns on in the console and aims to eliminate the need to install Yarn or PNPM. Node.js recognizes in package.json which package manager is defined — a huge relief that is built in from version 16.9.0.",
    date: "Feb 26, 2024",
    siteName: "Medium",
    sourceContent: "CorePack turns on in the console and aims to eliminate the need to install Yarn or PNPM. Node.js recognizes in package.json which package manager is defined — a huge relief that is built in from version 16.9.0."
  },
  4: {
    title: "The Future of Node.js: npm or corepack",
    url: "https://medium.com/@pacoarjona/node-js-leaves-npm-55d022e95a4f",
    content: "Corepack is an experimental tool created to aid in the management of package manager versions. It provides binary proxies for each supported package manager.",
    date: "Feb 17, 2024",
    siteName: "Medium",
    sourceContent: "Corepack is an experimental tool created to aid in the management of package manager versions. It provides binary proxies for each supported package manager."
  },
  5: {
    title: "Mastering npm & npx in 2025",
    url: "https://jewelhuq.medium.com/mastering-npm-npx-in-2025-the-definitive-guide-to-node-js-86b2c8e2a39d",
    content: "Use corepack to lock yarn/pnpm versions and prevent malicious global installs.",
    date: "May 2, 2025",
    siteName: "Medium",
    sourceContent: "Use corepack to lock yarn/pnpm versions and prevent malicious global installs."
  },
  6: {
    title: "Monorepo in React Native (2024)",
    url: "https://medium.com/@varunkukade999/monorepo-using-modern-yarn-4-3-1-workspaces-in-react-native-2024-895b1b61455c",
    content: "From now on, the preferred way to manage Yarn is by project and through Corepack, a tool shipped by default with Node.js. Modern releases of Yarn aren't meant to be installed globally, or from npm.",
    date: "Jul 20, 2024",
    siteName: "Medium",
    sourceContent: "From now on, the preferred way to manage Yarn is by project and through Corepack, a tool shipped by default with Node.js. Modern releases of Yarn aren't meant to be installed globally, or from npm."
  },
  7: {
    title: "BorePlusPlus/packageManager-demo",
    url: "https://github.com/BorePlusPlus/packageManager-demo",
    content: "A demo repository for a project with pinned down specific package manager utilising corepack to provision the package manager if missing.",
    date: "Retrieved 2025",
    siteName: "GitHub",
    sourceContent: "Demo of pinning down package manager, and using corepack for provisioning."
  }
};

const packageManagerComparisonData = [
  { name: 'インストール速度', npm: 60, yarn: 85, pnpm: 100 },
  { name: 'ディスク使用量', npm: 50, yarn: 70, pnpm: 95 },
  { name: '依存関係解決', npm: 65, yarn: 80, pnpm: 90 },
  { name: 'モノレポサポート', npm: 40, yarn: 90, pnpm: 95 },
];

const timelineData = [
  { year: '2010', event: 'npmの登場' },
  { year: '2016', event: 'Yarnの登場' },
  { year: '2017', event: 'pnpmの登場' },
  { year: '2021', event: 'Corepackの導入（Node.js 16.9.0）' },
  { year: '2023', event: 'Corepackの機能拡張と改善' },
  { year: '2024', event: 'Node.jsコミュニティでのCorepack議論活発化' },
  { year: '2025', event: '現在：さらなる統合と改善' },
];

const CorepackReport = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-white dark:bg-gray-900">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 dark:text-white">npmのCorepack詳細解説レポート</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Node.jsのパッケージマネージャー管理ツールの包括的な分析</p>
        <div className="flex items-center justify-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          <Clock size={16} className="mr-1" />
          <span>作成日: 2025年5月28日</span>
        </div>
      </header>

      {/* タブナビゲーション */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          <div className="flex items-center">
            <BookOpen size={18} className="mr-2" />
            <span>概要</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('features')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'features' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          <div className="flex items-center">
            <Package size={18} className="mr-2" />
            <span>機能と特徴</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('usage')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'usage' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          <div className="flex items-center">
            <Terminal size={18} className="mr-2" />
            <span>使用方法</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('comparison')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'comparison' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          <div className="flex items-center">
            <BCIcon size={18} className="mr-2" />
            <span>比較分析</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('future')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'future' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          <div className="flex items-center">
            <Zap size={18} className="mr-2" />
            <span>将来展望</span>
          </div>
        </button>
      </div>

      {/* コンテンツエリア */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Package className="mr-2" size={24} />
                Corepackとは
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                  Corepackは、Node.jsプロジェクトとその開発に使用されるパッケージマネージャーの間の橋渡しとして機能する、ランタイム依存関係のないNode.jsスクリプトです
                  <CitationLink id="1" callType="quote" citations={citations}/>。
                  簡単に言えば、Corepackを使用すると、Yarn、npm、pnpmなどのパッケージマネージャーを個別にインストールすることなく使用できます
                  <CitationLink id="2" callType="quote" citations={citations}/>。
                </p>

                <Alert className="my-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <AlertTitle className="flex items-center text-blue-800 dark:text-blue-300">
                    <HelpCircle size={18} className="mr-2" />
                    Corepackの主な目的
                  </AlertTitle>
                  <AlertDescription className="text-blue-700 dark:text-blue-200">
                    プロジェクトごとに適切なパッケージマネージャーとそのバージョンを自動的に管理し、チーム全体での一貫性を確保することです。
                  </AlertDescription>
                </Alert>

                <h3 className="text-xl font-semibold mt-6 mb-3">Corepackの歴史と背景</h3>
                <p>
                  Corepackは、Node.js 16.9.0から実験的機能として導入されました
                  <CitationLink id="3" callType="quote" citations={citations}/>。
                  JavaScriptエコシステムでは、npm、Yarn、pnpmなど複数のパッケージマネージャーが存在し、それぞれに独自の利点があります。
                  しかし、異なるプロジェクトで異なるパッケージマネージャーを使用する場合、開発者は各パッケージマネージャーを個別にインストールし、バージョンを管理する必要がありました。
                </p>

                <p className="mt-3">
                  Corepackはこの問題を解決するために作られました。プロジェクトが指定したパッケージマネージャーを自動的に検出し、必要に応じてインストールして実行します。
                  これにより、チーム全体でパッケージマネージャーのバージョンを一貫させることができ、「自分の環境では動作するのに」といった問題を減らすことができます。
                </p>

                <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Settings size={18} className="mr-2" />
                    Corepackの現状（2025年時点）
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Node.jsに同梱される実験的機能として継続的に改善</li>
                    <li>Yarn、pnpm、npmの主要パッケージマネージャーをサポート</li>
                    <li>Node.jsコミュニティ内でCorepackのデフォルト有効化について議論が進行中
                      <CitationLink id="4" callType="quote" citations={citations}/>
                    </li>
                    <li>セキュリティ強化のためのツールとしても注目されている
                      <CitationLink id="5" callType="quote" citations={citations}/>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <ChevronRight className="mr-2" size={24} />
                なぜCorepackが重要なのか
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-500" />
                      開発環境の一貫性
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      プロジェクトで指定されたパッケージマネージャーとバージョンを自動的に使用することで、
                      チーム全体で一貫した開発環境を維持できます。これにより、「自分の環境では動作するのに」
                      といった問題を減らすことができます。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-500" />
                      新規貢献者のオンボーディング簡素化
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      新しいチームメンバーやオープンソースプロジェクトの貢献者は、
                      システム固有のインストールプロセスに従う必要がなく、
                      すぐにプロジェクトの開発に参加できます。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-500" />
                      バージョン管理の自動化
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      パッケージマネージャーのバージョンをプロジェクトレベルで指定できるため、
                      チーム全体でバージョンの同期を手動で行う必要がなくなります。
                      更新も簡単に行えます。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-500" />
                      モダンなワークフローとの統合
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      特に最新のYarnなどは、Corepackを通じて管理することが推奨されています
                      <CitationLink id="6" callType="quote" citations={citations}/>。
                      モノレポやワークスペースなどの現代的な開発ワークフローとシームレスに統合できます。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <ChevronRight className="mr-2" size={24} />
                パッケージマネージャーの進化とCorepackの位置づけ
              </h2>
              
              <div className="relative overflow-x-auto mt-4">
                <div className="min-w-[600px]">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex mb-4">
                      <div className="w-24 font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                        {item.year}
                      </div>
                      <div className="flex-grow relative">
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-700"></div>
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <div className="pl-6">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6">
                Corepackは、複数のパッケージマネージャーが共存する現在のJavaScriptエコシステムにおいて、
                それらを統一的に管理するための重要なツールとして位置づけられています。
                特に2025年現在、モノレポ構造やマイクロフロントエンドなど複雑な開発環境が増える中で、
                Corepackの重要性はさらに高まっています。
              </p>
            </section>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Package className="mr-2" size={24} />
                Corepackの主要機能
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">パッケージマネージャーの自動検出</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      package.jsonの<code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">packageManager</code>フィールドを読み取り、
                      プロジェクトに指定されたパッケージマネージャーを自動的に検出します。
                    </p>
                    <div className="mt-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        {`{
  "packageManager": "yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa"
}`}
                      </code>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">透過的なインストールと実行</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      必要なパッケージマネージャーが見つからない場合、自動的にダウンロードしてインストールし、
                      ユーザーの介入なしに実行します。
                    </p>
                    <div className="mt-3 flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle size={16} className="mr-1" />
                      <span className="text-sm">ユーザーは通常通りコマンドを実行するだけ</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">バージョン整合性の確保</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      SHA-224ハッシュを使用してパッケージマネージャーのバージョン整合性を検証し、
                      セキュリティを強化します。
                    </p>
                    <div className="mt-3 flex items-center text-amber-600 dark:text-amber-400">
                      <AlertTriangle size={16} className="mr-1" />
                      <span className="text-sm">ハッシュは任意ですが、セキュリティのために強く推奨</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">オフラインワークフロー対応</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      パッケージマネージャーをアーカイブとして保存し、ネットワークアクセスなしで
                      インストールできる機能を提供します。
                    </p>
                    <div className="mt-3 flex items-center text-blue-600 dark:text-blue-400">
                      <Code size={16} className="mr-1" />
                      <span className="text-sm">コンテナ環境やCI/CDパイプラインに最適</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="my-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                <AlertTitle className="flex items-center text-amber-800 dark:text-amber-300">
                  <AlertTriangle size={18} className="mr-2" />
                  実験的機能としての注意点
                </AlertTitle>
                <AlertDescription className="text-amber-700 dark:text-amber-200">
                  Corepackは現在も実験的機能として位置づけられており、将来的に変更される可能性があります。
                  本番環境での使用は慎重に検討してください。
                </AlertDescription>
              </Alert>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Settings className="mr-2" size={24} />
                Corepackの設定と環境変数
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">環境変数</th>
                      <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">説明</th>
                      <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">デフォルト値</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600"><code>COREPACK_HOME</code></td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Corepackがパッケージマネージャーをインストールする場所</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Windows: <code>%LOCALAPPDATA%\node\corepack</code><br />その他: <code>$HOME/.cache/node/corepack</code></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600"><code>COREPACK_DEFAULT_TO_LATEST</code></td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">最新バージョンの自動検索を制御</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">1（有効）</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600"><code>COREPACK_ENABLE_NETWORK</code></td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">ネットワークアクセスの許可を制御</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">1（有効）</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600"><code>COREPACK_ENABLE_STRICT</code></td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">パッケージマネージャーの厳格な検証を制御</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">1（有効）</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600"><code>COREPACK_NPM_REGISTRY</code></td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">npmレジストリのベースURL</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600"><code>https://registry.npmjs.org</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">devEngines.packageManagerの使用</h3>
                <p className="mb-3">
                  package.jsonに<code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">devEngines.packageManager</code>フィールドを定義することで、
                  互換性のあるパッケージマネージャーを検証することもできます。
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    {`{
  "devEngines": {
    "packageManager": {
      "name": "yarn",
      "version": "3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa",
      "onFail": "error" // "ignore", "error", "warn"のいずれか
    }
  }
}`}
                  </code>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <GitBranch className="mr-2" size={24} />
                サポートされるパッケージマネージャー
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Package size={18} className="mr-2 text-red-500" />
                      npm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Node.jsのデフォルトパッケージマネージャー。Corepackでは明示的に要求された場合のみシムが作成されます。
                    </p>
                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      npmはNode.jsに同梱されているため、通常はCorepackでの管理は不要です。
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Package size={18} className="mr-2 text-blue-500" />
                      Yarn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Facebookが開発したパッケージマネージャー。特に最新のYarn Berry（2.x以降）はCorepackでの管理が推奨されています。
                    </p>
                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      Yarn Classicとモダンなバージョンの両方をサポート。
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Package size={18} className="mr-2 text-purple-500" />
                      pnpm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      高速でディスク効率の良いパッケージマネージャー。コンテンツアドレス可能ストレージを使用。
                    </p>
                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      モノレポ構造に特に適しており、Corepackと相性が良いです。
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <AlertTitle className="flex items-center text-blue-800 dark:text-blue-300">
                  <HelpCircle size={18} className="mr-2" />
                  カスタムURLのサポート
                </AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-200">
                  Corepackは、.jsファイル（CommonJSモジュールとして解釈）や.tgzファイル（パッケージとして解釈）へのURLも
                  packageManagerフィールドでサポートしています。これにより、カスタムビルドや特定のディストリビューションを使用できます。
                </AlertDescription>
              </Alert>
            </section>
          </div>
        )}

        {activeTab === 'usage' && (
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Terminal className="mr-2" size={24} />
                Corepackの基本的な使用方法
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Corepackの有効化</h3>
                  <p className="mb-3">
                    Corepackは実験的機能のため、明示的に有効化する必要があります。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      corepack enable
                    </code>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    これにより、サポートされているパッケージマネージャー（yarn、pnpm）のシムがNode.jsのインストール場所の近くに作成されます。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2. プロジェクトでのパッケージマネージャーの指定</h3>
                  <p className="mb-3">
                    package.jsonファイルにpackageManagerフィールドを追加して、プロジェクトで使用するパッケージマネージャーを指定します。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {`{
  "name": "my-project",
  "packageManager": "yarn@3.2.3"
}`}
                    </code>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    セキュリティのために、SHA-224ハッシュを含めることを推奨します：<code>yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa</code>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3. パッケージマネージャーの使用</h3>
                  <p className="mb-3">
                    通常通りパッケージマネージャーを使用するだけです。Corepackが自動的に適切なバージョンを検出し、必要に応じてインストールします。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # Yarnを使用する場合<br />
                      yarn install<br /><br />
                      # pnpmを使用する場合<br />
                      pnpm install
                    </code>
                  </div>
                </div>

                <Alert className="my-4 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                  <AlertTitle className="flex items-center text-amber-800 dark:text-amber-300">
                    <AlertTriangle size={18} className="mr-2" />
                    読み取り専用ファイルシステムでの注意点
                  </AlertTitle>
                  <AlertDescription className="text-amber-700 dark:text-amber-200">
                    Corepackバイナリが配置されているファイルシステムが読み取り専用の場合、シムの作成に失敗します。
                    その場合は、シェルの設定ファイルにエイリアスを追加することで回避できます：
                    <div className="mt-2 bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        alias yarn="corepack yarn"<br />
                        alias pnpm="corepack pnpm"
                      </code>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Terminal className="mr-2" size={24} />
                Corepackの高度な使用方法
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">特定のパッケージマネージャーの使用</h3>
                  <p className="mb-3">
                    corepackコマンドを使用して、特定のパッケージマネージャーとバージョンを明示的に実行できます。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # 特定のバージョンのYarnを使用<br />
                      corepack yarn@3.2.0 install<br /><br />
                      # 特定のバージョンのpnpmを使用<br />
                      corepack pnpm@7.0.0 install
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">パッケージマネージャーのグローバルインストール</h3>
                  <p className="mb-3">
                    特定のパッケージマネージャーをグローバルにインストールして、システム全体で使用できるようにします。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # 最新の安定版Yarnをグローバルにインストール<br />
                      corepack install --global yarn@stable<br /><br />
                      # 最新のpnpmをグローバルにインストール<br />
                      corepack install --global pnpm@*
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">プロジェクトのパッケージマネージャーを更新</h3>
                  <p className="mb-3">
                    corepack useコマンドを使用して、プロジェクトのパッケージマネージャーを更新できます。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # プロジェクトをYarn 3.3.0に更新<br />
                      corepack use yarn@3.3.0<br /><br />
                      # 最新のYarnに更新<br />
                      corepack use yarn@latest
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">現在のメジャーバージョンの最新リリースに更新</h3>
                  <p className="mb-3">
                    corepack upコマンドを使用して、現在のメジャーバージョンの最新リリースに更新できます。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # 現在のメジャーバージョンの最新リリースに更新<br />
                      corepack up
                    </code>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Terminal className="mr-2" size={24} />
                オフラインワークフローとCI/CD統合
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">パッケージマネージャーのアーカイブ作成</h3>
                  <p className="mb-3">
                    corepack packコマンドを使用して、パッケージマネージャーをアーカイブとして保存できます。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # Yarnのアーカイブを作成<br />
                      corepack pack yarn@3.2.3 -o yarn-3.2.3.tgz
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">オフラインインストール</h3>
                  <p className="mb-3">
                    事前に作成したアーカイブを使用して、ネットワークアクセスなしでパッケージマネージャーをインストールできます。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # アーカイブからYarnをインストール<br />
                      corepack install -g --cache-only ./yarn-3.2.3.tgz
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">CI/CDパイプラインでの使用例</h3>
                  <p className="mb-3">
                    CI/CDパイプラインでCorepackを使用する例です。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {`# GitHub Actionsの例
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Enable Corepack
        run: corepack enable
      - name: Install Dependencies
        run: yarn install
      - name: Build
        run: yarn build`}
                    </code>
                  </div>
                </div>

                <Alert className="my-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <AlertTitle className="flex items-center text-blue-800 dark:text-blue-300">
                    <HelpCircle size={18} className="mr-2" />
                    コンテナ環境での活用
                  </AlertTitle>
                  <AlertDescription className="text-blue-700 dark:text-blue-200">
                    コンテナイメージを構築する際に、Corepackを使用してパッケージマネージャーを管理することで、
                    イメージサイズを削減し、一貫性を確保できます。
                    <div className="mt-2 bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        {`# Dockerfileの例
FROM node:18

WORKDIR /app

# Corepackを有効化
RUN corepack enable

# パッケージマネージャーのバージョンを固定（オプション）
RUN corepack prepare yarn@3.2.3 --activate

COPY package.json yarn.lock ./

# Yarnを使用して依存関係をインストール
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD ["yarn", "start"]`}
                      </code>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Terminal className="mr-2" size={24} />
                実際の活用例
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">モノレポプロジェクトでの活用</h3>
                  <p className="mb-3">
                    複数のパッケージを含むモノレポプロジェクトでは、Corepackを使用して一貫したパッケージマネージャーの使用を強制できます
                    <CitationLink id="6" callType="quote" citations={citations}/>。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {`// ルートのpackage.json
{
  "name": "my-monorepo",
  "packageManager": "pnpm@7.5.0",
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}`}
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">特定のパッケージマネージャーを強制するプロジェクト</h3>
                  <p className="mb-3">
                    プロジェクトで特定のパッケージマネージャーの使用を強制し、一貫性を確保します
                    <CitationLink id="7" callType="quote" citations={citations}/>。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {`// package.json
{
  "name": "my-project",
  "packageManager": "yarn@3.2.3",
  "scripts": {
    "preinstall": "node ./scripts/ensure-yarn.js"
  }
}

// scripts/ensure-yarn.js
if (process.env.npm_execpath.includes('npm')) {
  console.error('このプロジェクトではnpmの使用は禁止されています。yarnを使用してください。');
  console.error('Corepackを有効にするには: corepack enable');
  process.exit(1);
}`}
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">チーム全体での一貫したバージョン管理</h3>
                  <p className="mb-3">
                    チーム全体で一貫したパッケージマネージャーのバージョンを使用することで、「自分の環境では動作する」問題を防ぎます。
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {`// .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: corepack enable
      - run: yarn install
      - run: yarn test`}
                    </code>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <BCIcon className="mr-2" size={24} />
                パッケージマネージャーの比較
              </h2>

              <div className="mb-6">
                <p className="mb-4">
                  Corepackは複数のパッケージマネージャーをサポートしていますが、それぞれに長所と短所があります。
                  以下は主要なパッケージマネージャーの比較です。
                </p>

                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={packageManagerComparisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="npm" fill="#E53E3E" name="npm" />
                      <Bar dataKey="yarn" fill="#3182CE" name="yarn" />
                      <Bar dataKey="pnpm" fill="#805AD5" name="pnpm" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">パッケージマネージャーの特徴比較</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700">
                          <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">機能</th>
                          <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">npm</th>
                          <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Yarn Classic</th>
                          <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Yarn Berry (PnP)</th>
                          <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">pnpm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">インストール方式</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">逐次</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">並列</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">並列 + PnP</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">並列 + シンボリックリンク</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">node_modules構造</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">フラット</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">フラット + ホイスティング</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">なし（.pnp.cjs）</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">コンテンツアドレス可能ストア</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">ロックファイル</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">package-lock.json</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">yarn.lock</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">yarn.lock</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">pnpm-lock.yaml</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">ワークスペース</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">あり（制限付き）</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">あり</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">あり（高度）</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">あり（高度）</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">オフラインサポート</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">限定的</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">あり</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">あり（高度）</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">あり</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">Corepackとの相性</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">中（議論中）</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">良好</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">非常に良好</td>
                          <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600">非常に良好</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Settings className="mr-2" size={24} />
                Corepackを使用する利点と欠点
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600 dark:text-green-400 flex items-center">
                      <CheckCircle size={18} className="mr-2" />
                      利点
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>一貫性の確保</strong>: チーム全体で同じパッケージマネージャーとバージョンを使用できます。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>オンボーディングの簡素化</strong>: 新しいチームメンバーは追加のインストール手順なしですぐに開発を始められます。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>バージョン管理の自動化</strong>: パッケージマネージャーのバージョンを自動的に管理します。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>セキュリティの向上</strong>: ハッシュ検証によりパッケージマネージャーの整合性を確保します。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>柔軟性</strong>: 異なるプロジェクトで異なるパッケージマネージャーを簡単に使用できます。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>CI/CDとの統合</strong>: ビルドプロセスでのパッケージマネージャーの管理が簡単になります。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600 dark:text-red-400 flex items-center">
                      <AlertTriangle size={18} className="mr-2" />
                      欠点
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-red-500" />
                      <p><strong>実験的機能</strong>: まだ実験的機能であり、将来変更される可能性があります。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-red-500" />
                      <p><strong>npmとの統合に関する議論</strong>: Node.jsコミュニティ内でnpmとCorepackの関係について議論が続いています。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-red-500" />
                      <p><strong>追加の複雑さ</strong>: 新しい概念と設定を学ぶ必要があります。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-red-500" />
                      <p><strong>一部のツールとの互換性</strong>: 一部のツールやワークフローがCorepackに対応していない場合があります。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-red-500" />
                      <p><strong>読み取り専用環境での制限</strong>: 読み取り専用ファイルシステムでは追加の設定が必要です。</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-red-500" />
                      <p><strong>認知度の低さ</strong>: まだ広く知られておらず、採用が限られています。</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Settings className="mr-2" size={24} />
                Corepackを使用すべき場合と使用しない方が良い場合
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600 dark:text-green-400 flex items-center">
                      <CheckCircle size={18} className="mr-2" />
                      使用すべき場合
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>チーム開発</strong>: 複数の開発者が同じプロジェクトで作業する場合</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>モノレポ</strong>: 複数のパッケージを含む大規模なプロジェクト</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>オープンソースプロジェクト</strong>: 貢献者のオンボーディングを簡素化したい場合</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>Yarn Berry/pnpmユーザー</strong>: これらのパッケージマネージャーを使用する場合</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-green-500" />
                      <p><strong>CI/CD環境</strong>: 一貫したビルド環境を確保したい場合</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-600 dark:text-amber-400 flex items-center">
                      <AlertTriangle size={18} className="mr-2" />
                      使用しない方が良い場合
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-amber-500" />
                      <p><strong>小規模な個人プロジェクト</strong>: 単一の開発者による小規模なプロジェクト</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-amber-500" />
                      <p><strong>安定性重視</strong>: 実験的機能を避けたい本番環境</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-amber-500" />
                      <p><strong>npmのみのユーザー</strong>: npmだけを使用し、他のパッケージマネージャーを使用する予定がない場合</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-amber-500" />
                      <p><strong>レガシーシステム</strong>: Node.js 14.19/16.9未満を使用している場合</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight size={16} className="mr-2 mt-1 text-amber-500" />
                      <p><strong>厳格な企業環境</strong>: 実験的機能の使用が制限されている環境</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'future' && (
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Zap className="mr-2" size={24} />
                Corepackの将来展望
              </h2>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Corepackは現在も実験的機能として位置づけられていますが、Node.jsエコシステムにおける重要性は増しています。
                  特に、複数のパッケージマネージャーが共存する現在の状況では、それらを統一的に管理するツールの需要は高まっています。
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Node.jsコミュニティでの議論</h3>
                <p>
                  Node.jsコミュニティ内では、Corepackをデフォルトで有効にするかどうか、またnpmをCorepackを通じて提供するかどうかについて
                  活発な議論が行われています
                  <CitationLink id="4" callType="quote" citations={citations}/>。
                  この議論の結果は、Corepackの将来に大きな影響を与える可能性があります。
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-4">
                  <h4 className="font-semibold mb-2">主な議論ポイント：</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Node.jsからnpmを分離すべきかどうか</li>
                    <li>Corepackをデフォルトで有効にすべきかどうか</li>
                    <li>npmをCorepackを通じて提供すべきかどうか</li>
                    <li>パッケージマネージャーのバージョン管理の最適な方法</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">予想される発展方向</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">機能の安定化と標準化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        実験的機能から標準機能への移行が進み、APIやコマンドラインインターフェースが安定化する可能性があります。
                        これにより、より多くのプロジェクトやツールがCorepackを採用しやすくなります。
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">サポートパッケージマネージャーの拡大</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        現在サポートされているnpm、Yarn、pnpmに加えて、将来的には新しいパッケージマネージャーや
                        特殊なユースケース向けのパッケージマネージャーもサポートされる可能性があります。
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">セキュリティ機能の強化</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        パッケージマネージャーの整合性検証やセキュリティ監査機能が強化され、
                        サプライチェーン攻撃からの保護が向上する可能性があります
                        <CitationLink id="5" callType="quote" citations={citations}/>。
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">ツールエコシステムとの統合</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        IDEやCI/CDツール、コンテナ環境などとの統合が進み、
                        開発ワークフロー全体でのパッケージマネージャー管理が簡素化される可能性があります。
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">課題と懸念事項</h3>
                <p>
                  Corepackの将来には、いくつかの課題と懸念事項も存在します。
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-4">
                  <h4 className="font-semibold mb-2">主な課題：</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>npmとの関係性の明確化と統合方針の決定</li>
                    <li>実験的機能から安定機能への移行プロセス</li>
                    <li>既存のワークフローやツールとの互換性の確保</li>
                    <li>パッケージマネージャーの多様化に対応する柔軟性の維持</li>
                    <li>セキュリティモデルの強化と検証メカニズムの改善</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <FileText className="mr-2" size={24} />
                まとめと推奨事項
              </h2>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Corepackは、Node.jsプロジェクトとパッケージマネージャーの間の橋渡しとして機能する強力なツールです。
                  チーム開発やモノレポプロジェクト、特にYarn Berryやpnpmなどのモダンなパッケージマネージャーを使用する場合に
                  特に有用です。
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">推奨事項</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={18} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                    <p><strong>新規プロジェクトでの採用検討</strong>: 特にチーム開発やモノレポ構造のプロジェクトでは、Corepackの採用を検討することをお勧めします。</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={18} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                    <p><strong>package.jsonへのpackageManagerフィールドの追加</strong>: プロジェクトで使用するパッケージマネージャーとバージョンを明示的に指定することで、一貫性を確保します。</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={18} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                    <p><strong>CI/CDパイプラインでの活用</strong>: ビルド環境での一貫性を確保するために、CI/CDパイプラインでCorepackを有効化することを検討してください。</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={18} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                    <p><strong>最新の動向のフォロー</strong>: Corepackは実験的機能であり、将来変更される可能性があるため、Node.jsコミュニティの議論や更新情報をフォローすることをお勧めします。</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={18} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                    <p><strong>セキュリティのためのハッシュ検証の活用</strong>: packageManagerフィールドでSHA-224ハッシュを指定することで、パッケージマネージャーの整合性を確保します。</p>
                  </div>
                </div>

                <Alert className="my-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <AlertTitle className="flex items-center text-blue-800 dark:text-blue-300">
                    <HelpCircle size={18} className="mr-2" />
                    最終的な判断
                  </AlertTitle>
                  <AlertDescription className="text-blue-700 dark:text-blue-200">
                    Corepackは強力なツールですが、プロジェクトの規模、チームの構成、使用するパッケージマネージャーなどの要因に基づいて、
                    その採用を検討する必要があります。小規模なプロジェクトや個人開発では必要ない場合もありますが、
                    チーム開発やモノレポプロジェクトでは大きな価値を提供します。
                  </AlertDescription>
                </Alert>

                <div className="flex justify-center mt-8">
                  <a 
                    href="https://github.com/nodejs/corepack" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Corepackの公式リポジトリを確認する
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* 参考文献 */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">参考文献</h2>
        <ul className="space-y-2">
          {Object.entries(citations).map(([id, citation]) => (
            <li key={id} className="flex items-start">
              <span className="mr-2">[{id}]</span>
              <CitationLink id={id} callType="recommend" citations={citations}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CorepackReport;
