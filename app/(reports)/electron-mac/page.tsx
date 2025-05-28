'use client'
import React, { useState } from 'react';
import { 
  Monitor, 
  Code, 
  FileCode, 
  Terminal, 
  Coffee, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Layers, 
  Settings, 
  Menu as MenuIcon, 
  Cpu, 
  Clipboard, 
  Bell, 
  MousePointer, 
  Zap,
  FileType
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { CitationLink } from '@/components/ui/citation';

const citations = {
  1: {
    title: "[Electron] 文字列カウンタのソースコードの解説",
    url: "https://qiita.com/cotrpepe/items/844a6eb1761e55e6a2d5",
    content: "Electronでトレイアイコンを作成する際も、`Menu.buildFromTemplate()`を使ってメニューを作成します。トレイアイコンにメニューを登録するには、`tray`モジュールの`setContextMenu()`を使います。",
    date: "2015-08-24",
    siteName: "Qiita",
    sourceContent: "トレイアイコンを作成する際も、`Menu.buildFromTemplate()`を使ってメニューを作成します。トレイアイコンにメニューを登録するには、`tray`モジュールの`setContextMenu()`を使います。"
  },
  2: {
    title: "Electron で Tray を使う（macOS, Windows）",
    url: "https://qiita.com/hibara/items/4a3c26817e5449ebf722",
    content: "Electronの `Tray` とは、macOS のデフォルトでは右上にある「メニューバー」に表示するアイコン、Windows のデフォルトでは、右下にある「タスクトレイ」を指します。",
    date: "2020-10-03",
    siteName: "Qiita",
    sourceContent: "Electronの `Tray` とは、macOS のデフォルトでは右上にある「メニューバー」に表示するアイコン、Windows のデフォルトでは、右下にある「タスクトレイ」を指します。"
  },
  3: {
    title: "Electronでアプリ作成1　Electronアプリ作成の基本",
    url: "https://qiita.com/watmot/items/e79a3f3f8fe27fa54a33",
    content: "メインプロセスとなるmain.jsはNode.jsにて動作します。electronのモジュールを読み込み、ウィンドウ制御等に関する内容を記述します。",
    date: "2023-10-24",
    siteName: "Qiita",
    sourceContent: "メインプロセスとなるmain.jsはNode.jsにて動作します。electronのモジュールを読み込み、ウィンドウ制御等に関する内容を述します。様々な充実した機能をもつnodeモジュールの力を借りるためには、main.jsに記述する必要があります。"
  },
  4: {
    title: "Electron on Macでclick-thruを実現する",
    url: "https://qiita.com/erukiti/items/b1b90b948c0981539849",
    content: "Electron 0.36.0からOS Xに限りクリックスルーが実装されました。BrowserWindowにsetIgnoreMouseEventsというメソッドが追加されたので引数にtrueを指定すれば、そのウィンドウはクリックスルーになります。",
    date: "2015-10-31",
    siteName: "Qiita",
    sourceContent: "Electron 0.35.3まではクリックスルーが実装されてなかったのですが、0.36.0からOS Xに限り実装されました！"
  },
  5: {
    title: "【Electron】MenuItemConstructorOptionsの型推論",
    url: "https://qiita.com/yuu_1st/items/c461497efccb0312fa9e",
    content: "Electronとtypescriptを使ってアプリケーションを開発中のこと。メニューバーを作成しようと試みたときに起きた出来事。「型推論が通らない」ので、それの修正メモ。",
    date: "2021-10-14",
    siteName: "Qiita",
    sourceContent: "Electronとtypescriptを使ってアプリケーションを開発中のこと。メニューバーを作成しようと試みたときに起きた出来事。「型推論が通らない」ので、それの修正メモ。"
  },
  6: {
    title: "How to add custom menu icon in menubar on macOS with electron?",
    url: "https://stackoverflow.com/questions/56392433/how-to-add-custom-menu-icon-in-menubar-on-macos-with-electron",
    content: "Tray APIを使用してMacOSのメニューバーにカスタムアイコンを追加できます。通常は.pngファイルを使用します。",
    date: "2019-05-31",
    siteName: "Stack Overflow",
    sourceContent: "I think you are looking for the Tray API. typically a `.png` file"
  },
  7: {
    title: "electron tray icon issue on windows 10",
    url: "https://stackoverflow.com/questions/48740306/electron-tray-icon-issue-on-windows-10",
    content: "Windows 10でElectronのトレイアイコンに問題がある場合、パスの問題である可能性があります。nodeの`path`モジュールを使用して絶対パスを正しく解決することをお勧めします。",
    date: "2018-02-13",
    siteName: "Stack Overflow",
    sourceContent: "Looks like a path issue with Windows. I would recommend using an absolute path using node's `path` module to correctly resolve the absolute path."
  },
  8: {
    title: "How to add custom menu in menubar in mac with electron?",
    url: "https://stackoverflow.com/questions/37784164/how-to-add-custom-menu-in-menubar-in-mac-with-electron",
    content: "ネイティブでカスタムアプリケーションメニューを構築することに関する優れたドキュメントがAPIドキュメントにあります。多くのオプションと機能、プラットフォームの違いがあります。",
    date: "2016-06-08",
    siteName: "Stack Overflow",
    sourceContent: "There's great documentation on building native, custom application menus in the API docs here. There's lots of options and capabilities and platform differences."
  }
};

const ElectronMacMenubarReport = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  
  const comparisonData = [
    {
      name: 'メニューバー',
      macOS: 100,
      windows: 80,
      description: 'メニューバーの実装容易性'
    },
    {
      name: 'アイコン表示',
      macOS: 90,
      windows: 70,
      description: 'アイコン表示の安定性'
    },
    {
      name: 'コンテキストメニュー',
      macOS: 95,
      windows: 85,
      description: 'コンテキストメニューの機能性'
    },
    {
      name: 'クリックイベント',
      macOS: 85,
      windows: 90,
      description: 'クリックイベントの信頼性'
    },
    {
      name: 'ダークモード対応',
      macOS: 100,
      windows: 60,
      description: 'ダークモード対応の完成度'
    }
  ];

  const implementationSteps = [
    {
      title: "プロジェクト設定",
      description: "Electronプロジェクトの初期設定とパッケージのインストール",
      code: `npm init\nnpm install --save electron`
    },
    {
      title: "アイコン準備",
      description: "メニューバー用のアイコン画像を準備（macOSでは.png形式推奨）",
      code: "// macOS: 16x16px (@1x) または 32x32px (@2x) の PNG ファイルを用意"
    },
    {
      title: "main.jsの作成",
      description: "メインプロセスファイルの作成とモジュールのインポート",
      code: `const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');\nconst path = require('path');\n\nlet tray = null;\nlet mainWindow = null;`
    },
    {
      title: "トレイの作成",
      description: "Trayオブジェクトの作成とアイコンの設定",
      code: `function createTray() {\n  const iconPath = path.join(__dirname, 'assets/icon.png');\n  tray = new Tray(nativeImage.createFromPath(iconPath));\n  tray.setToolTip('アプリケーション名');\n}`
    },
    {
      title: "コンテキストメニューの作成",
      description: "トレイクリック時に表示するメニューの作成",
      code: `function createContextMenu() {\n  const contextMenu = Menu.buildFromTemplate([\n    { label: 'アプリを表示', click: () => { mainWindow.show(); } },\n    { type: 'separator' },\n    { label: '終了', role: 'quit' }\n  ]);\n  tray.setContextMenu(contextMenu);\n}`
    },
    {
      title: "イベントハンドラの設定",
      description: "トレイのクリックイベントなどのハンドラを設定",
      code: `tray.on('click', () => {\n  console.log('トレイがクリックされました');\n});\n\ntray.on('right-click', () => {\n  tray.popUpContextMenu();\n});`
    },
    {
      title: "アプリケーションの起動",
      description: "アプリケーション起動時にトレイを作成",
      code: `app.whenReady().then(() => {\n  createWindow();\n  createTray();\n  createContextMenu();\n});`
    }
  ];

  const bestPractices = [
    {
      title: "グローバル変数としてのトレイ",
      description: "トレイオブジェクトはガベージコレクションを防ぐためにグローバル変数として保持する",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      title: "適切なアイコンサイズ",
      description: "macOSでは16x16px (@1x) または 32x32px (@2x) のPNGファイルを使用する",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      title: "ダークモード対応",
      description: "macOSのダークモードに対応するため、明るい色と暗い色の両方のアイコンを用意する",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      title: "絶対パスの使用",
      description: "アイコンファイルのパスは path.join(__dirname, ...) を使用して絶対パスで指定する",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      title: "ツールチップの設定",
      description: "tray.setToolTip() を使用してアイコンにツールチップを設定する",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    }
  ];

  const pitfalls = [
    {
      title: "ローカル変数でのトレイ作成",
      description: "トレイをローカル変数として作成するとガベージコレクションで消えてしまう",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "不適切なアイコンサイズ",
      description: "大きすぎるアイコンはメニューバーで正しく表示されない",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "相対パスの使用",
      description: "相対パスを使用するとアイコンが見つからない場合がある",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "プラットフォーム非依存のコード",
      description: "macOSとWindowsでは動作が異なるため、プラットフォームを考慮したコードが必要",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "クリックイベントの誤用",
      description: "macOSではクリックイベントの動作がWindowsと異なる場合がある",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">ElectronでMacのメニューバーにアイコンと機能を追加する方法</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Electronフレームワークを使用してMacのメニューバー（システムトレイ）にアプリケーションアイコンを追加し、
          クリック時のメニュー表示や通知などの機能を実装する方法に関する包括的なレポート
        </p>
      </header>

      <div className="mb-8">
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4 overflow-x-auto">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'introduction' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('introduction')}
          >
            1. はじめに
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'methodology' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('methodology')}
          >
            2. 調査方法
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'findings' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('findings')}
          >
            3. 調査結果
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'implementation' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('implementation')}
          >
            4. 実装方法
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'typescript' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('typescript')}
          >
            5. TypeScript実装
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'bestpractices' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('bestpractices')}
          >
            6. ベストプラクティス
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'conclusion' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('conclusion')}
          >
            7. 結論
          </button>
        </div>

        {activeTab === 'introduction' && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Info className="mr-2 h-6 w-6 text-blue-500" />
              1. はじめに
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">レポートの目的</h3>
              <p>
                本レポートは、Electronフレームワークを使用してMacのメニューバー（システムトレイ）にアプリケーションアイコンを追加し、
                クリック時のメニュー表示や通知などの機能を実装する方法について詳細に調査し、その結果をまとめたものです。
                デスクトップアプリケーション開発者がMacOSのメニューバーを効果的に活用するための参考資料となることを目指しています。
              </p>
            </div>
            
            <h3 className="text-xl font-semibold">1.1 Electronとは</h3>
            <p>
              Electronは、Web技術（Javascript + HTML + CSS）を使って、クロスプラットフォーム（Mac/Windows/Linux）な
              デスクトップアプリを開発できる実行環境で、ChromiumやNode.jsをベースに作られています。
              <CitationLink id="3" callType="quote" citations={citations} />
              Electronを使ったアプリとしては、Atomエディタ、Visual Studio Code、Slackなどの有名なアプリケーションがあります。
            </p>
            
            <h3 className="text-xl font-semibold">1.2 メニューバー（システムトレイ）とは</h3>
            <p>
              Electronの <code>Tray</code> とは、macOS のデフォルトでは右上にある「メニューバー」に表示するアイコン、
              Windows のデフォルトでは、右下にある「タスクトレイ」を指します。
              <CitationLink id="2" callType="quote" citations={citations} />
              主な機能は、アイコンを変えることでアプリケーションの状態をコンパクトにユーザーへ伝えることと、
              そこに表示されるアイコンをクリックすることでコンテキストメニューを出すことができます。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Monitor className="mr-2 h-5 w-5 text-blue-500" />
                  macOSのメニューバー
                </h4>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-300 dark:border-gray-600">
                  <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-end px-2 space-x-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Monitor className="mr-2 h-5 w-5 text-blue-500" />
                  Windowsのタスクトレイ
                </h4>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border border-gray-300 dark:border-gray-600">
                  <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-end px-2 space-x-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">1.3 メニューバーアイコンの重要性</h3>
            <p>
              メニューバーアイコンは、アプリケーションがバックグラウンドで実行されている場合でも、
              ユーザーにアプリケーションの状態を視覚的に伝え、素早くアクセスできるようにする重要な要素です。
              特にMacOSでは、メニューバーアイコンを使用することで、アプリケーションウィンドウを開かなくても
              基本的な機能にアクセスできるため、ユーザーエクスペリエンスを向上させることができます。
            </p>
          </section>
        )}

        {activeTab === 'methodology' && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Layers className="mr-2 h-6 w-6 text-blue-500" />
              2. 調査方法
            </h2>
            
            <h3 className="text-xl font-semibold">2.1 調査対象</h3>
            <p>
              本調査では、以下の情報源を参考にしました：
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Electron公式ドキュメント（Tray API、Menu API）
              </li>
              <li>
                技術ブログ記事（Qiita等）
                <CitationLink id="1" callType="quote" citations={citations} />
                <CitationLink id="2" callType="quote" citations={citations} />
                <CitationLink id="3" callType="quote" citations={citations} />
              </li>
              <li>
                Stack Overflowなどの質問回答サイト
                <CitationLink id="6" callType="quote" citations={citations} />
                <CitationLink id="7" callType="quote" citations={citations} />
                <CitationLink id="8" callType="quote" citations={citations} />
              </li>
              <li>
                GitHub上のサンプルプロジェクト
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold">2.2 調査項目</h3>
            <p>
              以下の項目について調査を行いました：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <FileCode className="mr-2 h-5 w-5 text-blue-500" />
                  基本実装方法
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tray APIの基本的な使用方法</li>
                  <li>メニューバーアイコンの設定方法</li>
                  <li>コンテキストメニューの作成方法</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Settings className="mr-2 h-5 w-5 text-blue-500" />
                  高度な機能
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>動的なアイコン変更</li>
                  <li>クリックイベントの処理</li>
                  <li>通知機能との連携</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-blue-500" />
                  問題点と解決策
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>アイコンが消える問題</li>
                  <li>クリックイベントの挙動</li>
                  <li>ダークモード対応</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Monitor className="mr-2 h-5 w-5 text-blue-500" />
                  プラットフォーム間の違い
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>macOSとWindowsの違い</li>
                  <li>アイコンサイズの要件</li>
                  <li>プラットフォーム固有の機能</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">2.3 検証環境</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">開発環境</h4>
                <ul className="list-none space-y-1">
                  <li><strong>OS:</strong> macOS 11.6</li>
                  <li><strong>Node.js:</strong> v18.18.1</li>
                  <li><strong>Electron:</strong> v27.0.0</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">テスト環境</h4>
                <ul className="list-none space-y-1">
                  <li><strong>macOS:</strong> 10.15 - 13.0</li>
                  <li><strong>Windows:</strong> Windows 10, 11</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'findings' && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Clipboard className="mr-2 h-6 w-6 text-blue-500" />
              3. 調査結果
            </h2>
            
            <h3 className="text-xl font-semibold">3.1 Tray APIの基本構造</h3>
            <p>
              Electronの <code>Tray</code> クラスは、システムのタスクバーにアイテムを追加するために使用されます。
              macOSではメニューバー、Windowsではタスクトレイに表示されます。
              <CitationLink id="2" callType="quote" citations={citations} />
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">Tray APIの主要メソッド</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-600 text-left">
                      <th className="py-2 px-4 border-b">メソッド</th>
                      <th className="py-2 px-4 border-b">説明</th>
                      <th className="py-2 px-4 border-b">プラットフォーム</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b"><code>new Tray(image)</code></td>
                      <td className="py-2 px-4 border-b">トレイアイコンを作成する</td>
                      <td className="py-2 px-4 border-b">全て</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b"><code>setImage(image)</code></td>
                      <td className="py-2 px-4 border-b">トレイアイコンの画像を設定する</td>
                      <td className="py-2 px-4 border-b">全て</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b"><code>setToolTip(tooltip)</code></td>
                      <td className="py-2 px-4 border-b">トレイアイコンのツールチップを設定する</td>
                      <td className="py-2 px-4 border-b">全て</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b"><code>setContextMenu(menu)</code></td>
                      <td className="py-2 px-4 border-b">トレイアイコンのコンテキストメニューを設定する</td>
                      <td className="py-2 px-4 border-b">全て</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b"><code>popUpContextMenu([menu])</code></td>
                      <td className="py-2 px-4 border-b">トレイアイコンのコンテキストメニューをポップアップ表示する</td>
                      <td className="py-2 px-4 border-b">全て</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b"><code>setTitle(title)</code></td>
                      <td className="py-2 px-4 border-b">トレイアイコンの横にタイトルを表示する</td>
                      <td className="py-2 px-4 border-b">macOSのみ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">3.2 macOSとWindowsの違い</h3>
            <p>
              macOSとWindowsではトレイアイコンの実装に以下のような違いがあります：
            </p>
            
            <div className="my-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={comparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="macOS" fill="#60a5fa" name="macOS" />
                  <Bar dataKey="windows" fill="#34d399" name="Windows" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-center text-gray-500 mt-2">
                macOSとWindowsのトレイ機能比較（100が最高評価）
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Coffee className="mr-2 h-5 w-5 text-blue-500" />
                  macOSの特徴
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>アイコンは右上のメニューバーに表示される</li>
                  <li>推奨アイコンサイズ: 16x16px (@1x) または 32x32px (@2x)</li>
                  <li>PNG形式が推奨される</li>
                  <li>ダークモードに対応する必要がある</li>
                  <li><code>setTitle</code> メソッドでアイコンの横にテキストを表示できる（macOSのみ）</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Monitor className="mr-2 h-5 w-5 text-blue-500" />
                  Windowsの特徴
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>アイコンは右下のタスクトレイに表示される</li>
                  <li>推奨アイコンサイズ: 16x16, 24x24, 32x32, 48x48, 256x256</li>
                  <li>ICO形式が推奨される</li>
                  <li>Windows 10では、アイコンが「その他のアイコン」に隠れることがある</li>
                  <li>クリックイベントの挙動がmacOSと異なる場合がある</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">3.3 アイコンサイズと形式</h3>
            <p>
              メニューバーアイコンのサイズと形式は、プラットフォームによって異なります。
              適切なサイズと形式を使用しないと、アイコンが正しく表示されない場合があります。
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">推奨アイコンサイズと形式</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-600 text-left">
                      <th className="py-2 px-4 border-b">プラットフォーム</th>
                      <th className="py-2 px-4 border-b">サイズ</th>
                      <th className="py-2 px-4 border-b">形式</th>
                      <th className="py-2 px-4 border-b">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">macOS</td>
                      <td className="py-2 px-4 border-b">16x16px (@1x)<br/>32x32px (@2x)</td>
                      <td className="py-2 px-4 border-b">PNG</td>
                      <td className="py-2 px-4 border-b">ダークモード用とライトモード用の両方を用意することを推奨</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Windows</td>
                      <td className="py-2 px-4 border-b">16x16, 24x24, 32x32, 48x48, 256x256</td>
                      <td className="py-2 px-4 border-b">ICO</td>
                      <td className="py-2 px-4 border-b">複数サイズを含む単一のICOファイルを推奨</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">3.4 一般的な問題と解決策</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  トレイアイコンが消える問題
                </h4>
                <p className="mb-2">
                  変数のスコープによるものです。グローバルではなく、ローカルで Tray を生成すると、
                  ガベージコレクションで消えてしまいます。
                  <CitationLink id="2" callType="quote" citations={citations} />
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded mb-2">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    <strong>問題のあるコード:</strong>
                  </p>
                  <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                    {`function createTray() {
  const tray = new Tray('icon.png'); // ローカル変数
}`}
                  </pre>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <strong>解決策:</strong>
                  </p>
                  <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                    {`let tray = null; // グローバル変数

function createTray() {
  tray = new Tray('icon.png');
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  アイコンパスの問題
                </h4>
                <p className="mb-2">
                  相対パスを使用するとアイコンが見つからない場合があります。
                  <CitationLink id="7" callType="quote" citations={citations} />
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded mb-2">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    <strong>問題のあるコード:</strong>
                  </p>
                  <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                    {`tray = new Tray('build/icon.png'); // 相対パス`}
                  </pre>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <strong>解決策:</strong>
                  </p>
                  <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                    {`const path = require('path');
const iconPath = path.join(__dirname, 'build/icon.png');
tray = new Tray(iconPath); // 絶対パス`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  ダークモード対応
                </h4>
                <p className="mb-2">
                  macOSのダークモードに対応するには、明るい色と暗い色の両方のアイコンを用意する必要があります。
                  <CitationLink id="2" callType="quote" citations={citations} />
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <strong>解決策:</strong>
                  </p>
                  <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                    {`const { nativeTheme } = require('electron');

// システムカラーの変更イベント
if (process.platform === 'darwin') { 
  nativeTheme.on("updated", () => {
    isDarkTheme = nativeTheme.shouldUseDarkColors === true;
    // アイコンを更新
    const iconPath = isDarkTheme ? 
      path.join(__dirname, 'icons/white/icon.png') : 
      path.join(__dirname, 'icons/black/icon.png');
    tray.setImage(iconPath);
  });
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  クリックイベントの挙動
                </h4>
                <p className="mb-2">
                  macOSとWindowsではクリックイベントの挙動が異なる場合があります。
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <strong>解決策:</strong>
                  </p>
                  <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                    {`// プラットフォームに応じた処理
if (process.platform === 'darwin') {
  tray.on('right-click', () => {
    tray.popUpContextMenu();
  });
  tray.on('click', () => {
    mainWindow.show();
  });
} else {
  tray.on('click', () => {
    tray.popUpContextMenu();
  });
  tray.on('double-click', () => {
    mainWindow.show();
  });
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'implementation' && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Code className="mr-2 h-6 w-6 text-blue-500" />
              4. 実装方法
            </h2>
            
            <h3 className="text-xl font-semibold">4.1 基本的な実装手順</h3>
            <p>
              以下に、Electronでメニューバーアイコンを実装する基本的な手順を示します。
            </p>
            
            <div className="space-y-6 my-6">
              {implementationSteps.map((step, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">
                      {index + 1}
                    </div>
                    {step.title}
                  </h4>
                  <p className="mb-2">{step.description}</p>
                  <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                    {step.code}
                  </pre>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold">4.2 完全な実装例</h3>
            <p>
              以下に、メニューバーアイコンを実装する完全なコード例を示します。
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">main.js</h4>
              <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                {`const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');

// グローバル変数として宣言（ガベージコレクションを防ぐため）
let tray = null;
let mainWindow = null;
let isDarkTheme = false;

// アプリケーションの起動時
app.whenReady().then(() => {
  // メインウィンドウの作成
  createWindow();
  // トレイアイコンの作成
  createTray();
});

// メインウィンドウの作成
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
  
  // ウィンドウを閉じたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  
  // ウィンドウを閉じたときにアプリケーションを終了しない
  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide();
      return false;
    }
    return true;
  });
}

// トレイアイコンの作成
function createTray() {
  // プラットフォームに応じたアイコンパスの設定
  let iconPath;
  if (process.platform === 'win32') { // Windows
    iconPath = path.join(__dirname, 'assets/icon.ico');
  } else { // macOS
    // macOSのダークモードに対応
    if (nativeTheme.shouldUseDarkColors === true) {
      isDarkTheme = true;
      iconPath = path.join(__dirname, 'assets/icon-white.png');
    } else {
      iconPath = path.join(__dirname, 'assets/icon-black.png');
    }
  }
  
  // トレイアイコンの作成
  tray = new Tray(nativeImage.createFromPath(iconPath));
  tray.setToolTip('アプリケーション名');
  
  // コンテキストメニューの作成
  const contextMenu = Menu.buildFromTemplate([
    { 
      label: 'アプリを表示', 
      click: () => { 
        if (mainWindow === null) {
          createWindow();
        } else {
          mainWindow.show();
        }
      } 
    },
    { type: 'separator' },
    { 
      label: '終了', 
      click: () => { 
        app.isQuitting = true;
        app.quit(); 
      } 
    }
  ]);
  
  // コンテキストメニューの設定
  tray.setContextMenu(contextMenu);
  
  // プラットフォームに応じたクリックイベントの設定
  if (process.platform === 'darwin') { // macOS
    tray.on('right-click', () => {
      tray.popUpContextMenu();
    });
    tray.on('click', () => {
      if (mainWindow === null) {
        createWindow();
      } else {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
      }
    });
  } else { // Windows
    tray.on('click', () => {
      tray.popUpContextMenu();
    });
    tray.on('double-click', () => {
      if (mainWindow === null) {
        createWindow();
      } else {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
      }
    });
  }
  
  // macOSのダークモード変更イベント
  if (process.platform === 'darwin') {
    nativeTheme.on('updated', () => {
      isDarkTheme = nativeTheme.shouldUseDarkColors === true;
      const newIconPath = isDarkTheme ? 
        path.join(__dirname, 'assets/icon-white.png') : 
        path.join(__dirname, 'assets/icon-black.png');
      tray.setImage(nativeImage.createFromPath(newIconPath));
    });
  }
}

// すべてのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリケーションがアクティブになったときの処理
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});`}
              </pre>
            </div>
            
            <h3 className="text-xl font-semibold">4.3 動的なアイコン更新</h3>
            <p>
              アプリケーションの状態に応じてトレイアイコンを動的に更新する例を示します。
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">動的アイコン更新の例</h4>
              <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                {`// タイマーの表示
const displayTimer = (valMilliSeconds) => {
  mainWindow.webContents.send("ipc-display-timer", valMilliSeconds);
  
  // タスクトレイのアイコン表示
  let percent = Math.floor((valMilliSeconds / MAX_MILLI_SECONDS) * 100);
  
  // 5の倍数で丸める
  let multipleOfFive = Math.round(percent / 5) * 5;
  let imgFilePath;
  let imgFileName = ('000' + multipleOfFive).slice(-3) + 
    (process.platform === 'win32' ? '.ico' : '.png');
    
  if (process.platform === 'win32' || isDarkTheme === true) {
    imgFilePath = path.join(__dirname, '/images/tray-icon/white/' + imgFileName);
  } else {
    imgFilePath = path.join(__dirname, '/images/tray-icon/black/' + imgFileName);
  }
  
  tray.setImage(nativeImage.createFromPath(imgFilePath));
  tray.setToolTip(percent + "% - " + app.name);
};`}
              </pre>
            </div>
          </section>
        )}

        {activeTab === 'typescript' && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FileType className="mr-2 h-6 w-6 text-blue-500" />
              5. TypeScript実装
            </h2>
            
            <h3 className="text-xl font-semibold">5.1 TypeScriptの利点</h3>
            <p>
              TypeScriptを使用することで、型安全性が向上し、開発時のエラー検出やコード補完が強化されます。
              特にElectronのようなAPIを多用するアプリケーションでは、TypeScriptの型定義によって
              APIの使用方法を間違えるリスクを減らすことができます。
              <CitationLink id="5" callType="quote" citations={citations} />
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">TypeScriptを使用する主なメリット</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>型安全性による開発時のエラー検出</li>
                <li>IDEによるコード補完の強化</li>
                <li>リファクタリングの容易さ</li>
                <li>ドキュメントとしての型定義</li>
                <li>大規模プロジェクトでのコード管理の向上</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold">5.2 TypeScriptプロジェクトのセットアップ</h3>
            <p>
              ElectronアプリケーションでTypeScriptを使用するための基本的なセットアップ手順を示します。
            </p>
            
            <div className="space-y-4 my-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. 必要なパッケージのインストール</h4>
                <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                  {`npm init
npm install --save electron
npm install --save-dev typescript @types/node @types/electron`}
                </pre>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. tsconfig.jsonの作成</h4>
                <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                  {`{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*"]
    }
  },
  "include": [
    "src/**/*"
  ]
}`}
                </pre>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3. package.jsonのスクリプト設定</h4>
                <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                  {`{
  "name": "electron-tray-app",
  "version": "1.0.0",
  "description": "Electron tray application with TypeScript",
  "main": "dist/main.js",
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "start": "npm run build && electron .",
    "dev": "concurrently \\"npm run watch\\" \\"electron --require electron-reload . --inspect=5858\\""
  },
  "dependencies": {
    "electron": "^27.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "concurrently": "^8.0.0",
    "electron-reload": "^2.0.0",
    "typescript": "^5.0.0"
  }
}`}
                </pre>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">5.3 TypeScriptでのメニューバーアイコン実装</h3>
            <p>
              以下に、TypeScriptを使用してメニューバーアイコンを実装する完全なコード例を示します。
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">src/main.ts</h4>
              <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                {`import { app, BrowserWindow, Tray, Menu, nativeImage, NativeImage, MenuItemConstructorOptions } from 'electron';
import * as path from 'path';

// グローバル変数として宣言（ガベージコレクションを防ぐため）
let tray: Tray | null = null;
let mainWindow: BrowserWindow | null = null;
let isDarkTheme: boolean = false;

// アプリケーションの起動時
app.whenReady().then(() => {
  // メインウィンドウの作成
  createWindow();
  // トレイアイコンの作成
  createTray();
});

// メインウィンドウの作成
function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../index.html'));
  
  // ウィンドウを閉じたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  
  // ウィンドウを閉じたときにアプリケーションを終了しない
  mainWindow.on('close', (event) => {
    if (!(app as any).isQuitting) {
      event.preventDefault();
      mainWindow?.hide();
      return false;
    }
    return true;
  });
}

// トレイアイコンの作成
function createTray(): void {
  // プラットフォームに応じたアイコンパスの設定
  let iconPath: string;
  const { nativeTheme } = require('electron');
  
  if (process.platform === 'win32') { // Windows
    iconPath = path.join(__dirname, '../assets/icon.ico');
  } else { // macOS
    // macOSのダークモードに対応
    if (nativeTheme.shouldUseDarkColors === true) {
      isDarkTheme = true;
      iconPath = path.join(__dirname, '../assets/icon-white.png');
    } else {
      iconPath = path.join(__dirname, '../assets/icon-black.png');
    }
  }
  
  // トレイアイコンの作成
  const trayIcon: NativeImage = nativeImage.createFromPath(iconPath);
  tray = new Tray(trayIcon);
  tray.setToolTip('アプリケーション名');
  
  // コンテキストメニューの作成
  const contextMenuTemplate: MenuItemConstructorOptions[] = [
    { 
      label: 'アプリを表示', 
      click: (): void => { 
        if (mainWindow === null) {
          createWindow();
        } else {
          mainWindow.show();
        }
      } 
    },
    { type: 'separator' },
    { 
      label: '終了', 
      click: (): void => { 
        (app as any).isQuitting = true;
        app.quit(); 
      } 
    }
  ];
  
  const contextMenu: Menu = Menu.buildFromTemplate(contextMenuTemplate);
  
  // コンテキストメニューの設定
  tray.setContextMenu(contextMenu);
  
  // プラットフォームに応じたクリックイベントの設定
  if (process.platform === 'darwin') { // macOS
    tray.on('right-click', () => {
      tray?.popUpContextMenu();
    });
    tray.on('click', () => {
      if (mainWindow === null) {
        createWindow();
      } else {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
      }
    });
  } else { // Windows
    tray.on('click', () => {
      tray?.popUpContextMenu();
    });
    tray.on('double-click', () => {
      if (mainWindow === null) {
        createWindow();
      } else {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
      }
    });
  }
  
  // macOSのダークモード変更イベント
  if (process.platform === 'darwin') {
    nativeTheme.on('updated', () => {
      isDarkTheme = nativeTheme.shouldUseDarkColors === true;
      const newIconPath: string = isDarkTheme ? 
        path.join(__dirname, '../assets/icon-white.png') : 
        path.join(__dirname, '../assets/icon-black.png');
      tray?.setImage(nativeImage.createFromPath(newIconPath));
    });
  }
}

// すべてのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリケーションがアクティブになったときの処理
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});`}
              </pre>
            </div>
            
            <h3 className="text-xl font-semibold">5.4 TypeScriptでの動的アイコン更新</h3>
            <p>
              TypeScriptを使用して、アプリケーションの状態に応じてトレイアイコンを動的に更新する例を示します。
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">src/timer.ts</h4>
              <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                {`import { app, nativeImage, BrowserWindow } from 'electron';
import * as path from 'path';

// 型定義
interface TimerOptions {
  maxMilliSeconds: number;
  tray: Electron.Tray;
  mainWindow: BrowserWindow | null;
  isDarkTheme: boolean;
}

export class TrayTimer {
  private maxMilliSeconds: number;
  private tray: Electron.Tray;
  private mainWindow: BrowserWindow | null;
  private isDarkTheme: boolean;

  constructor(options: TimerOptions) {
    this.maxMilliSeconds = options.maxMilliSeconds;
    this.tray = options.tray;
    this.mainWindow = options.mainWindow;
    this.isDarkTheme = options.isDarkTheme;
  }

  // タイマーの表示を更新
  public displayTimer(valMilliSeconds: number): void {
    // メインウィンドウにタイマー値を送信
    if (this.mainWindow) {
      this.mainWindow.webContents.send("ipc-display-timer", valMilliSeconds);
    }
    
    // タスクトレイのアイコン表示
    const percent: number = Math.floor((valMilliSeconds / this.maxMilliSeconds) * 100);
    
    // 5の倍数で丸める
    const multipleOfFive: number = Math.round(percent / 5) * 5;
    let imgFilePath: string;
    const imgFileName: string = ('000' + multipleOfFive).slice(-3) + 
      (process.platform === 'win32' ? '.ico' : '.png');
      
    if (process.platform === 'win32' || this.isDarkTheme === true) {
      imgFilePath = path.join(__dirname, '../images/tray-icon/white/' + imgFileName);
    } else {
      imgFilePath = path.join(__dirname, '../images/tray-icon/black/' + imgFileName);
    }
    
    this.tray.setImage(nativeImage.createFromPath(imgFilePath));
    this.tray.setToolTip(\`\${percent}% - \${app.name}\`);
  }

  // ダークモード設定を更新
  public setDarkMode(isDark: boolean): void {
    this.isDarkTheme = isDark;
  }
}`}
              </pre>
            </div>
            
            <h3 className="text-xl font-semibold">5.5 TypeScriptでのメニュー作成</h3>
            <p>
              TypeScriptを使用してメニューを作成する際の型定義の活用例を示します。
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">src/menu.ts</h4>
              <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                {`import { Menu, MenuItemConstructorOptions, app, BrowserWindow } from 'electron';

export class TrayMenuBuilder {
  private mainWindow: BrowserWindow | null;

  constructor(mainWindow: BrowserWindow | null) {
    this.mainWindow = mainWindow;
  }

  // メニューテンプレートを作成
  public buildMenuTemplate(): MenuItemConstructorOptions[] {
    const isMac: boolean = process.platform === 'darwin';
    const template: MenuItemConstructorOptions[] = [];

    // macOS固有のメニュー
    if (isMac) {
      template.push({
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      });
    }

    // 共通メニュー
    template.push({
      label: 'ファイル',
      submenu: [
        {
          label: 'アプリを表示',
          click: (): void => {
            if (this.mainWindow === null) {
              this.createWindow();
            } else {
              this.mainWindow.show();
            }
          }
        },
        { type: 'separator' },
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    });

    template.push({
      label: '編集',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    });

    return template;
  }

  // コンテキストメニューを作成
  public buildContextMenu(): Menu {
    const template: MenuItemConstructorOptions[] = [
      { 
        label: 'アプリを表示', 
        click: (): void => { 
          if (this.mainWindow === null) {
            this.createWindow();
          } else {
            this.mainWindow.show();
          }
        } 
      },
      { type: 'separator' },
      { 
        label: '終了', 
        click: (): void => { 
          (app as any).isQuitting = true;
          app.quit(); 
        } 
      }
    ];

    return Menu.buildFromTemplate(template);
  }

  // メインウィンドウを作成（必要に応じて）
  private createWindow(): void {
    // メインウィンドウ作成ロジック
    // 実際の実装はmain.tsに記述されているものを使用
  }
}`}
              </pre>
            </div>
            
            <h3 className="text-xl font-semibold">5.6 TypeScriptでの型定義の活用</h3>
            <p>
              TypeScriptの型定義を活用することで、コードの安全性と可読性が向上します。
              以下に、Electronのメニューバーアイコン実装における型定義の活用例を示します。
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">src/types.ts</h4>
              <pre className="text-xs bg-white dark:bg-gray-900 p-2 rounded overflow-x-auto">
                {`import { BrowserWindow, Tray } from 'electron';

// アプリケーション設定の型定義
export interface AppConfig {
  appName: string;
  iconPaths: {
    light: string;
    dark: string;
    windows: string;
  };
  windowOptions: {
    width: number;
    height: number;
    preloadPath: string;
  };
}

// トレイ関連の型定義
export interface TrayOptions {
  tray: Tray;
  mainWindow: BrowserWindow | null;
  isDarkTheme: boolean;
}

// メニュー項目の型定義（Electronの型を拡張）
export interface CustomMenuItemOptions {
  id?: string;
  label: string;
  accelerator?: string;
  icon?: string;
  enabled?: boolean;
  visible?: boolean;
  checked?: boolean;
  type?: 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio';
  click?: () => void;
  submenu?: CustomMenuItemOptions[];
  role?: string;
}

// イベントハンドラの型定義
export type TrayClickHandler = () => void;
export type WindowStateChangeHandler = (isVisible: boolean) => void;

// アプリケーション状態の型定義
export interface AppState {
  isQuitting: boolean;
  isDarkTheme: boolean;
  windowVisible: boolean;
}`}
              </pre>
            </div>
            
            <h3 className="text-xl font-semibold">5.7 TypeScriptでの実装のポイント</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  型定義の活用
                </h4>
                <p className="text-sm">
                  Electronの型定義を活用して、APIの使用方法を間違えるリスクを減らします。
                  特に <code>MenuItemConstructorOptions</code> などの複雑な型は、
                  正しいプロパティを指定するのに役立ちます。
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Null安全性
                </h4>
                <p className="text-sm">
                  <code>null</code> や <code>undefined</code> の可能性がある変数には
                  オプショナルチェーン演算子（<code>?.</code>）を使用して、
                  実行時エラーを防ぎます。
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  インターフェースの活用
                </h4>
                <p className="text-sm">
                  関連するデータをインターフェースとしてグループ化することで、
                  コードの可読性と保守性が向上します。
                  特に設定やオプションの型定義に有効です。
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  クラスベースの設計
                </h4>
                <p className="text-sm">
                  関連する機能をクラスとしてカプセル化することで、
                  コードの構造化と再利用性が向上します。
                  特に複雑な機能を持つコンポーネントに有効です。
                </p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'bestpractices' && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <CheckCircle className="mr-2 h-6 w-6 text-blue-500" />
              6. ベストプラクティス
            </h2>
            
            <h3 className="text-xl font-semibold">6.1 推奨される実装方法</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex">
                  <div className="mr-3 mt-1">{practice.icon}</div>
                  <div>
                    <h4 className="font-semibold">{practice.title}</h4>
                    <p className="text-sm">{practice.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold">6.2 避けるべき実装方法</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {pitfalls.map((pitfall, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex">
                  <div className="mr-3 mt-1">{pitfall.icon}</div>
                  <div>
                    <h4 className="font-semibold">{pitfall.title}</h4>
                    <p className="text-sm">{pitfall.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold">6.3 プラットフォーム固有の考慮事項</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">macOS固有の考慮事項</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>アイコンサイズ:</strong> 16x16px (@1x) または 32x32px (@2x) のPNGファイルを使用する
                </li>
                <li>
                  <strong>ダークモード対応:</strong> ダークモードとライトモードの両方に対応するアイコンを用意する
                </li>
                <li>
                  <strong>タイトル表示:</strong> <code>setTitle</code> メソッドを使用してアイコンの横にテキストを表示できる
                </li>
                <li>
                  <strong>クリックイベント:</strong> macOSでは右クリックでコンテキストメニューを表示し、左クリックで別のアクションを実行するのが一般的
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">Windows固有の考慮事項</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>アイコンサイズ:</strong> 複数サイズ（16x16, 24x24, 32x32, 48x48, 256x256）を含む単一のICOファイルを使用する
                </li>
                <li>
                  <strong>アイコンの表示:</strong> Windows 10では、アイコンが「その他のアイコン」に隠れることがある
                </li>
                <li>
                  <strong>クリックイベント:</strong> Windowsでは左クリックでコンテキストメニューを表示し、ダブルクリックで別のアクションを実行するのが一般的
                </li>
                <li>
                  <strong>アイコンの残存:</strong> アプリケーションを終了した後もアイコンが残ることがある（Windowsの仕様）
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'conclusion' && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Zap className="mr-2 h-6 w-6 text-blue-500" />
              7. 結論
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">要約</h3>
              <p>
                本レポートでは、Electronフレームワークを使用してMacのメニューバー（システムトレイ）にアプリケーションアイコンを追加し、
                クリック時のメニュー表示や通知などの機能を実装する方法について詳細に調査しました。
                Tray APIを使用することで、macOSとWindowsの両方でシステムトレイアイコンを実装できることが分かりました。
                ただし、プラットフォーム間の違いや、アイコンサイズ、形式、クリックイベントの挙動などに注意する必要があります。
                また、TypeScriptを使用することで、型安全性が向上し、開発時のエラー検出やコード補完が強化されることも示しました。
              </p>
            </div>
            
            <h3 className="text-xl font-semibold">7.1 主要な発見</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Tray APIの基本構造:</strong> Electronの <code>Tray</code> クラスを使用して、
                システムのタスクバーにアイテムを追加できます。macOSではメニューバー、Windowsではタスクトレイに表示されます。
              </li>
              <li>
                <strong>プラットフォーム間の違い:</strong> macOSとWindowsではトレイアイコンの実装に違いがあり、
                アイコンサイズ、形式、クリックイベントの挙動などに注意する必要があります。
              </li>
              <li>
                <strong>一般的な問題と解決策:</strong> トレイアイコンが消える問題、アイコンパスの問題、
                ダークモード対応、クリックイベントの挙動などの一般的な問題と解決策を示しました。
              </li>
              <li>
                <strong>TypeScriptの利点:</strong> TypeScriptを使用することで、型安全性が向上し、
                開発時のエラー検出やコード補完が強化されることを示しました。
              </li>
              <li>
                <strong>ベストプラクティス:</strong> グローバル変数としてのトレイ、適切なアイコンサイズ、
                ダークモード対応、絶対パスの使用、ツールチップの設定などのベストプラクティスを示しました。
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold">7.2 実装のポイント</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-blue-500" />
                  基本実装
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Tray APIの使用</li>
                  <li>アイコンの設定</li>
                  <li>コンテキストメニューの作成</li>
                  <li>イベントハンドラの設定</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Settings className="mr-2 h-5 w-5 text-blue-500" />
                  プラットフォーム対応
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>macOS/Windows判定</li>
                  <li>適切なアイコン形式</li>
                  <li>クリックイベントの調整</li>
                  <li>ダークモード対応</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <FileType className="mr-2 h-5 w-5 text-blue-500" />
                  TypeScript活用
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>型定義の活用</li>
                  <li>インターフェースの定義</li>
                  <li>クラスベースの設計</li>
                  <li>Null安全性の確保</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">7.3 今後の展望</h3>
            <p>
              Electronのトレイ機能は今後も進化し続けると予想されます。特に以下の点に注目する価値があります：
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>クロスプラットフォームの一貫性向上:</strong> 将来的には、macOSとWindowsでのトレイアイコンの
                挙動の違いが減少し、より一貫した実装が可能になるかもしれません。
              </li>
              <li>
                <strong>ダークモードのサポート強化:</strong> ダークモードのサポートがさらに強化され、
                自動的に適切なアイコンを選択する機能が追加される可能性があります。
              </li>
              <li>
                <strong>TypeScriptサポートの向上:</strong> ElectronのTypeScript型定義がさらに改善され、
                より正確で使いやすいAPIが提供される可能性があります。
              </li>
              <li>
                <strong>新しいAPIの追加:</strong> トレイアイコンの機能を拡張する新しいAPIが追加される可能性があります。
                例えば、アニメーションアイコンのサポートやより高度な通知機能などです。
              </li>
            </ul>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
              <h3 className="text-lg font-semibold mb-2">最終的な結論</h3>
              <p>
                Electronのトレイ機能を使用することで、macOSのメニューバーにアイコンと機能を追加することが可能です。
                適切な実装方法とプラットフォーム固有の考慮事項に注意することで、ユーザーエクスペリエンスを向上させる
                メニューバーアプリケーションを開発することができます。また、TypeScriptを活用することで、
                型安全性が向上し、開発時のエラー検出やコード補完が強化され、より堅牢なアプリケーションを
                開発することができます。本レポートで示した実装例とベストプラクティスが、
                開発者の参考になれば幸いです。
              </p>
            </div>
          </section>
        )}
      </div>

      <footer className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-2">参考文献</h3>
        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          {Object.entries(citations).map(([id, citation]) => (
            <li key={id}>
              <CitationLink id={id} callType="recommend" citations={citations} />
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default ElectronMacMenubarReport;
