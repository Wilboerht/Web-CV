const en = `flowchart LR
  subgraph C["Clients"]
    WEB["Web"]
    MP["WeChat Mini Programs"]
  end

  subgraph P["Core Platform"]
    MAIN["nihplod.cn<br/>Identity & Commerce"]
    SKIN["smart.nihplod.cn<br/>AI Skin Analysis"]
    KF["kf.nihplod.cn<br/>AI Customer Service"]
  end

  subgraph I["Independent"]
    BA["ba.nihplod.cn<br/>Authorization Verification"]
  end

  WEB -->|"SSO"| MAIN
  MP -->|"login"| MAIN
  MP -->|"skin test"| SKIN
  MAIN <-->|"products / points / reports"| SKIN
  SKIN <-->|"kf-link / report"| KF
  MAIN -.->|"service entry"| BA
  KF -.->|"verify link"| BA
`;

const cn = `flowchart LR
  subgraph C["客户端"]
    WEB["Web"]
    MP["微信小程序"]
  end

  subgraph P["核心平台"]
    MAIN["nihplod.cn<br/>身份与交易"]
    SKIN["smart.nihplod.cn<br/>AI 测肤分析"]
    KF["kf.nihplod.cn<br/>AI 智能客服"]
  end

  subgraph I["独立系统"]
    BA["ba.nihplod.cn<br/>授权验真"]
  end

  WEB -->|"SSO"| MAIN
  MP -->|"登录"| MAIN
  MP -->|"测肤"| SKIN
  MAIN <-->|"商品 / 积分 / 报告"| SKIN
  SKIN <-->|"客服链接 / 报告"| KF
  MAIN -.->|"服务入口"| BA
  KF -.->|"验真链接"| BA
`;

const tw = `flowchart LR
  subgraph C["客戶端"]
    WEB["Web"]
    MP["微信小程式"]
  end

  subgraph P["核心平台"]
    MAIN["nihplod.cn<br/>身分與交易"]
    SKIN["smart.nihplod.cn<br/>AI 測膚分析"]
    KF["kf.nihplod.cn<br/>AI 智慧客服"]
  end

  subgraph I["獨立系統"]
    BA["ba.nihplod.cn<br/>授權驗真"]
  end

  WEB -->|"SSO"| MAIN
  MP -->|"登入"| MAIN
  MP -->|"測膚"| SKIN
  MAIN <-->|"商品 / 積分 / 報告"| SKIN
  SKIN <-->|"客服連結 / 報告"| KF
  MAIN -.->|"服務入口"| BA
  KF -.->|"驗真連結"| BA
`;

const hk = `flowchart LR
  subgraph C["客戶端"]
    WEB["Web"]
    MP["微信小程式"]
  end

  subgraph P["核心平台"]
    MAIN["nihplod.cn<br/>身份與交易"]
    SKIN["smart.nihplod.cn<br/>AI 測膚分析"]
    KF["kf.nihplod.cn<br/>AI 智能客服"]
  end

  subgraph I["獨立系統"]
    BA["ba.nihplod.cn<br/>授權驗真"]
  end

  WEB -->|"SSO"| MAIN
  MP -->|"登入"| MAIN
  MP -->|"測膚"| SKIN
  MAIN <-->|"商品 / 積分 / 報告"| SKIN
  SKIN <-->|"客服連結 / 報告"| KF
  MAIN -.->|"服務入口"| BA
  KF -.->|"驗真連結"| BA
`;

const de = `flowchart LR
  subgraph C["Clients"]
    WEB["Web"]
    MP["WeChat-Mini-Programme"]
  end

  subgraph P["Kernplattform"]
    MAIN["nihplod.cn<br/>Identität & Handel"]
    SKIN["smart.nihplod.cn<br/>KI-Hautanalyse"]
    KF["kf.nihplod.cn<br/>KI-Kundenservice"]
  end

  subgraph I["Eigenständig"]
    BA["ba.nihplod.cn<br/>Autorisierungsprüfung"]
  end

  WEB -->|"SSO"| MAIN
  MP -->|"Login"| MAIN
  MP -->|"Hauttest"| SKIN
  MAIN <-->|"Produkte / Punkte / Berichte"| SKIN
  SKIN <-->|"Service-Link / Bericht"| KF
  MAIN -.->|"Service-Einstieg"| BA
  KF -.->|"Prüf-Link"| BA
`;

const kr = `flowchart LR
  subgraph C["클라이언트"]
    WEB["웹"]
    MP["위챗 미니프로그램"]
  end

  subgraph P["핵심 플랫폼"]
    MAIN["nihplod.cn<br/>계정 & 커머스"]
    SKIN["smart.nihplod.cn<br/>AI 피부 분석"]
    KF["kf.nihplod.cn<br/>AI 고객서비스"]
  end

  subgraph I["독립 시스템"]
    BA["ba.nihplod.cn<br/>인증 검증"]
  end

  WEB -->|"SSO"| MAIN
  MP -->|"로그인"| MAIN
  MP -->|"피부 측정"| SKIN
  MAIN <-->|"상품 / 포인트 / 리포트"| SKIN
  SKIN <-->|"고객서비스 링크 / 리포트"| KF
  MAIN -.->|"서비스 진입"| BA
  KF -.->|"검증 링크"| BA
`;

export const moidasArchitecture = { cn, tw, hk, en, de, kr };
