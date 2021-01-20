<br>

# TypeScript Quick Start - 개발 환경 구축

<br>

---

<br>

# 01. 개발 환경 구축 관련

<br>

## # 컴파일러(p.16)

<br>

타입스크립트의 아키텍처는 언어 변환 기능을 수행하는 코어 타입스크립트 컴파일러를 기반으로 한다.

코어 타입스크립트 컴파일러는 파서, 바인더, 타입체커, 에미터, 전처리기로 구성되어 있다.

<br>

- 파서(parser): 읽어 들인 소스코드를 해석해 구문 트리를 만들고, 구문 트리를 다시 해석해 추상 구문 트리를 생성한다. 이때 추상 구문 트리(AST: Abstract Syntax Tree)는 구문 분석으로 생성된 파스 트리(Parse Tree)에서 불필요한 중복 내용을 제거한 트리이다.

<br>

- 바인더(binder): 인터페이스나 모듈, 혹은 함수와 같은 모듈에 선언이 있을 때 이러한 선언을 심벌(symbol)로 보고 심벌 간의 규칙을 정의한다. 타입 시스템은 바인더를 통해 명명된 선언을 추론할 수 있게 된다.

<br>

- 타입 체커(type checker): 타입이 선언된 구문을 분석하고 타입이 적절한지 체크한다.

<br>

- 에미터(emitter): 입력된 `*.ts` 같은 타입스크립트 파일을 `*.js`, `*.d.ts`, `*.js.map` 유형의 파일로 생성하는 기능을 수행한다.

<br>

- 전처리기(pre-processor): 타입스크립트 파일에 선언된 import문이나 `"/// <reference path = 경로/>"` 와 같은 외부 호출 선언이 있을 때 참조할 수 있는 파일을 가져와 정렬된 파일 목록을 생성한다. 파일 목록을 만들 때는 `.d.ts`보다는 `.ts` 파일을 우선으로 호출해 가져온다.

  이때 앰비언트 모듈이 이미 선언돼 있다면 모듈을 가져오지 못하더라도 에러를 발생시키지 않는다. 결국 컴파일러는 전처리기로부터 생성된 파일 목록을 이용해 파일을 호출하고 컴파일을 수행한다.

<br>
<br>
<br>
<br>

## # 타입스크립트 설치 및 버전 업그레이드(p.41)

<br>

1. npm을 이용한 타입스크립트 설치

   - 설치: `npm install -g typescript`

   - 버전확인: `tsc -v`

   - 업데이트: `npm outdated -g typescript`

<br>

2. 타입스크립트 최신 버전 업데이트 방법

   - 타입스크립트 제거: `npm uninstall -g typescript`

   - 패키지 관련 기존 파일 삭제: `npm cache clean`

   - 타입스크립트 새로 설치: `npm install -g typescript`

<br>
<br>
<br>
<br>

---

<br>