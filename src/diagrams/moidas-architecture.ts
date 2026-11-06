const en = `flowchart LR
  subgraph C["Clients"]
    WEB["Web"]
    MP1["Member Center Mini Program"]
    MP2["Skin Analysis Mini Program"]
  end

  subgraph P["Core Platform"]
    SSO["SSO / OIDC"]
    MAIN["nihplod.cn<br/>Identity & Commerce"]
    SKIN["smart.nihplod.cn<br/>AI Skin Analysis"]
    KF["kf.nihplod.cn<br/>AI Customer Service"]
  end

  subgraph I["Independent"]
    BA["ba.nihplod.cn<br/>Authorization Verification"]
  end

  WEB -->|"SSO"| SSO
  MP1 -->|"login"| SSO
  MP2 -->|"login"| SSO
  SSO -->|"tokens"| MAIN
  SSO -->|"tokens"| SKIN
  SSO -->|"tokens"| KF
  SSO -->|"tokens"| BA
  MP1 -->|"member APIs"| MAIN
  MP2 -->|"skin test"| SKIN
  MAIN <-->|"products / points / reports"| SKIN
  SKIN <-->|"kf-link / report"| KF
  MAIN -.->|"service entry"| BA
  KF -.->|"verify link"| BA
`;

const cn = `flowchart LR
  subgraph C["客户端"]
    WEB["Web"]
    MP1["会员中心小程序"]
    MP2["AI 测肤小程序"]
  end

  subgraph P["核心平台"]
    SSO["SSO / OIDC"]
    MAIN["nihplod.cn<br/>身份与交易"]
    SKIN["smart.nihplod.cn<br/>AI 测肤分析"]
    KF["kf.nihplod.cn<br/>AI 智能客服"]
  end

  subgraph I["独立系统"]
    BA["ba.nihplod.cn<br/>授权验真"]
  end

  WEB -->|"SSO"| SSO
  MP1 -->|"登录"| SSO
  MP2 -->|"登录"| SSO
  SSO -->|"令牌"| MAIN
  SSO -->|"令牌"| SKIN
  SSO -->|"令牌"| KF
  SSO -->|"令牌"| BA
  MP1 -->|"会员 API"| MAIN
  MP2 -->|"测肤"| SKIN
  MAIN <-->|"商品 / 积分 / 报告"| SKIN
  SKIN <-->|"客服链接 / 报告"| KF
  MAIN -.->|"服务入口"| BA
  KF -.->|"验真链接"| BA
`;

const tw = `flowchart LR
  subgraph C["客戶端"]
    WEB["Web"]
    MP1["會員中心小程式"]
    MP2["AI 測膚小程式"]
  end

  subgraph P["核心平台"]
    SSO["SSO / OIDC"]
    MAIN["nihplod.cn<br/>身分與交易"]
    SKIN["smart.nihplod.cn<br/>AI 測膚分析"]
    KF["kf.nihplod.cn<br/>AI 智慧客服"]
  end

  subgraph I["獨立系統"]
    BA["ba.nihplod.cn<br/>授權驗真"]
  end

  WEB -->|"SSO"| SSO
  MP1 -->|"登入"| SSO
  MP2 -->|"登入"| SSO
  SSO -->|"權杖"| MAIN
  SSO -->|"權杖"| SKIN
  SSO -->|"權杖"| KF
  SSO -->|"權杖"| BA
  MP1 -->|"會員 API"| MAIN
  MP2 -->|"測膚"| SKIN
  MAIN <-->|"商品 / 積分 / 報告"| SKIN
  SKIN <-->|"客服連結 / 報告"| KF
  MAIN -.->|"服務入口"| BA
  KF -.->|"驗真連結"| BA
`;

const hk = `flowchart LR
  subgraph C["客戶端"]
    WEB["Web"]
    MP1["會員中心小程式"]
    MP2["AI 測膚小程式"]
  end

  subgraph P["核心平台"]
    SSO["SSO / OIDC"]
    MAIN["nihplod.cn<br/>身份與交易"]
    SKIN["smart.nihplod.cn<br/>AI 測膚分析"]
    KF["kf.nihplod.cn<br/>AI 智能客服"]
  end

  subgraph I["獨立系統"]
    BA["ba.nihplod.cn<br/>授權驗真"]
  end

  WEB -->|"SSO"| SSO
  MP1 -->|"登入"| SSO
  MP2 -->|"登入"| SSO
  SSO -->|"權杖"| MAIN
  SSO -->|"權杖"| SKIN
  SSO -->|"權杖"| KF
  SSO -->|"權杖"| BA
  MP1 -->|"會員 API"| MAIN
  MP2 -->|"測膚"| SKIN
  MAIN <-->|"商品 / 積分 / 報告"| SKIN
  SKIN <-->|"客服連結 / 報告"| KF
  MAIN -.->|"服務入口"| BA
  KF -.->|"驗真連結"| BA
`;

const de = `flowchart LR
  subgraph C["Clients"]
    WEB["Web"]
    MP1["Mitgliedercenter-Mini-Programm"]
    MP2["Hautanalyse-Mini-Programm"]
  end

  subgraph P["Kernplattform"]
    SSO["SSO / OIDC"]
    MAIN["nihplod.cn<br/>Identität & Handel"]
    SKIN["smart.nihplod.cn<br/>KI-Hautanalyse"]
    KF["kf.nihplod.cn<br/>KI-Kundenservice"]
  end

  subgraph I["Eigenständig"]
    BA["ba.nihplod.cn<br/>Autorisierungsprüfung"]
  end

  WEB -->|"SSO"| SSO
  MP1 -->|"Login"| SSO
  MP2 -->|"Login"| SSO
  SSO -->|"Tokens"| MAIN
  SSO -->|"Tokens"| SKIN
  SSO -->|"Tokens"| KF
  SSO -->|"Tokens"| BA
  MP1 -->|"Mitglieder-APIs"| MAIN
  MP2 -->|"Hauttest"| SKIN
  MAIN <-->|"Produkte / Punkte / Berichte"| SKIN
  SKIN <-->|"Service-Link / Bericht"| KF
  MAIN -.->|"Service-Einstieg"| BA
  KF -.->|"Prüf-Link"| BA
`;

const kr = `flowchart LR
  subgraph C["클라이언트"]
    WEB["웹"]
    MP1["멤버십 센터 미니프로그램"]
    MP2["AI 피부 측정 미니프로그램"]
  end

  subgraph P["핵심 플랫폼"]
    SSO["SSO / OIDC"]
    MAIN["nihplod.cn<br/>계정 & 커머스"]
    SKIN["smart.nihplod.cn<br/>AI 피부 분석"]
    KF["kf.nihplod.cn<br/>AI 고객서비스"]
  end

  subgraph I["독립 시스템"]
    BA["ba.nihplod.cn<br/>인증 검증"]
  end

  WEB -->|"SSO"| SSO
  MP1 -->|"로그인"| SSO
  MP2 -->|"로그인"| SSO
  SSO -->|"토큰"| MAIN
  SSO -->|"토큰"| SKIN
  SSO -->|"토큰"| KF
  SSO -->|"토큰"| BA
  MP1 -->|"멤버십 API"| MAIN
  MP2 -->|"피부 측정"| SKIN
  MAIN <-->|"상품 / 포인트 / 리포트"| SKIN
  SKIN <-->|"고객서비스 링크 / 리포트"| KF
  MAIN -.->|"서비스 진입"| BA
  KF -.->|"검증 링크"| BA
`;

const ja = `flowchart LR
  subgraph C["クライアント"]
    WEB["Web"]
    MP1["会員センターミニプログラム"]
    MP2["AI肌診断ミニプログラム"]
  end

  subgraph P["コアプラットフォーム"]
    SSO["SSO / OIDC"]
    MAIN["nihplod.cn<br/>ID・コマース"]
    SKIN["smart.nihplod.cn<br/>AI肌診断"]
    KF["kf.nihplod.cn<br/>AIカスタマーサービス"]
  end

  subgraph I["独立システム"]
    BA["ba.nihplod.cn<br/>認証確認"]
  end

  WEB -->|"SSO"| SSO
  MP1 -->|"ログイン"| SSO
  MP2 -->|"ログイン"| SSO
  SSO -->|"トークン"| MAIN
  SSO -->|"トークン"| SKIN
  SSO -->|"トークン"| KF
  SSO -->|"トークン"| BA
  MP1 -->|"会員API"| MAIN
  MP2 -->|"肌診断"| SKIN
  MAIN <-->|"商品 / ポイント / レポート"| SKIN
  SKIN <-->|"問合せリンク / レポート"| KF
  MAIN -.->|"サービス入口"| BA
  KF -.->|"認証確認リンク"| BA
`;

export const moidasArchitecture = { cn, tw, hk, en, de, kr, ja };
