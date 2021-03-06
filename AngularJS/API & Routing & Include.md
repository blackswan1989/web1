<br>

# 1. AngularJS API

<br>

#### &nbsp;&nbsp; API는 Application Programming Interface를 의미한다.

<br>

&nbsp;&nbsp; _URL : https://www.w3schools.com/angular/angular_api.asp_

<br>

---

<br>

## 01. Global API

<br>

1. Global API 함수는 angular 객체를 사용하여 액세스된다.

2. AngularJS의 Global API는 다음과 같은 일반적인 작업을 수행하기위한 전역 JavaScript 함수 집합이다.

<br>

- #### Comparing objects (객체 비교)
- #### Iterating objects (반복 객체)
- #### Converting data (데이터 변환)

<br>
<br>

- **Examples 1 : Converting data - `uppercase()`는 문자열을 대문자로 변환(Converting)시켜준다**

  ```
  <div ng-app="myApp" ng-controller="myCtrl">
    <p>name: {{ name }}</p>
    <p>Uppercase name: {{ converting }}</p>
  </div>

  <script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.name = "John Doe";
        $scope.converting = angular.uppercase($scope.name);
    });
  </script>

  // 결과 : {{ name }} -> John Doe  |   {{ converting }} -> JOHN DOE
  ```

<br>
<br>

- **Examples 2 : Comparing objects - `isNumber()`는 객체를 비교해서 참조가 숫자이면 true를 반환한다.**

  ```
  <div ng-app="myApp" ng-controller="myCtrl">
    <p>name: {{ name }}</p>
    <p>is Number: {{ comparing }}</p>
  </div>

  <script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.name = "John Doe";
        $scope.comparing = angular.isNumber($scope.name);
    });
  </script>

  // 결과 : {{ name }} -> John Doe  |   {{ comparing }} -> false
  ```

<br>
<br>
<br>
<br>
<br>

## 02. Global API 종류

<br>

&nbsp; API Reference : https://www.w3schools.com/angular/angular_ref_directives.asp

<br>

### &nbsp; 1) Converting (변환)

<br>

- `angular.lowercase()` : 문자열을 소문자로 변환시켜준다.

- `angular.uppercase()` : 문자열을 대문자로 변환시켜준다.

- `angular.copy()` : 객체 또는 배열의 전체 복사본을 만들어 준다.

- `angular.forEach()` : 객체 또는 배열의 각 요소에 대해 함수를 실행시켜준다.

<br>
<br>
<br>

### &nbsp; 2) Comparing (비교)

<br>

- `angular.isArray()` : 참조문(reference)이 배열이면 true를 반환해 준다.

- `angular.isDate()` : 참조문(reference)이 날짜면 true를 반환해 준다.

- `angular.isElement()` : 참조문(reference)이 DOM Element이면 true를 반환해 준다.

- `angular.isFunction()` : 참조문(reference)이 함수면 true를 반환해 준다.

- `angular.isObject()` : 참조문(reference)이 객체이면 true를 반환해 준다.

- `angular.isNumber()` : 참조문(reference)이 숫자이면 true를 반환해 준다.

- `angular.isString()` : 참조문(reference)이 문자열이면 true를 반환해 준다.

- `angular.isDefined()` : 참조문(reference)이 정의된 경우 true를 반환해 준다.

- `angular.isUndefined()` : 참조문(reference)이 정의되어 있지 않으면 true를 반환해 준다.

- `angular.equals()` : 두 참조문(reference)을 비교해서 같으면 true를 반환해 준다

<br>
<br>
<br>

### &nbsp; 3) JSON

<br>

- `angular.fromJson()` : JSON 문자열을 가져와서 JavaScript 객체를 반환합니다.

- `angular.toJson()` : JavaScript 객체를 받아 JSON 문자열을 반환합니다.

<br>
<br>
<br>

### &nbsp; 4) BASIC

- `angular.bootstrap()` : AngularJS를 수동으로 시작한다.

- `angular.element()` : HTML 요소를 jQuery 요소로 래핑(Wrap)해준다.

- `angular.module()` : AngularJS 모듈을 생성, 등록, 검색한다.

<br>
<br>
<br>
<br>
<br>
<br>

---

<br>

# 2. AngularJS Routing

<br>

#### &nbsp;&nbsp; `ngRoute` 모듈은 애플리케이션이 Single Page Application이 되도록 도와준다.

<br>

&nbsp;&nbsp; _URL : https://www.w3schools.com/angular/angular_routing.asp_

<br>

---

<br>

## 01. AngularJS에서의 Routing이란?

<br>

1. Application의 다른 페이지로 이동하고 싶을 때 페이지를 다시로드하지 않고 SPA(Single Page Application)가 되게하려면 `ngRoute` 모듈을 사용하면 된다.

2. `ngRoute` 모듈은 전체 Application을 다시 로드(reloading)하지 않고 애플리케이션을 다른 페이지로 라우팅(routes)해준다.

<br>

- **Examples : Navigate to `"main.htm"`, `"red.htm"`, `"green.htm"`, `"blue.htm"`**

  ```
  <body ng-app="myApp">

    <p><a href="#/!">Main</a></p>
    <a href="#!red">Red</a>
    <a href="#!green">Green</a>
    <a href="#!blue">Blue</a>

    <div ng-view></div>

    <script>
      var app = angular.module("myApp", ["ngRoute"]);
      app.config(function($routeProvider) {
          $routeProvider
          .when("/", {
              templateUrl : "main.htm"
          })
          .when("/red", {
              templateUrl : "red.htm"
          })
          .when("/green", {
              templateUrl : "green.htm"
          })
          .when("/blue", {
              templateUrl : "blue.htm"
          });
      });
    </script>

  </body>
  ```

  - 링크를 클릭하여 `"red.htm"`, `"green.htm"`, `"blue.htm"`으로 이동하거나 `"main.htm"`으로 돌아갈 수 있다.
  - `ng-view`는 현재 경로의 렌더링 된 템플릿을 기본 레이아웃(index.html) 파일에 포함하여 `$route` 서비스를 보완하는 지시문이다.
  - 현재 경로가 변경 될 때마다 포함된 View가 `$route` 서비스의 구성에 따라 변경된다.
  - _<small>url : https://www.w3schools.com/angular/tryit.asp?filename=try_ng_routing</small>_

<br>
<br>
<br>
<br>
<br>

## 02. Routing 사용 방법

<br>

### &nbsp; 1) Route module 포함시키기

- 애플리케이션을 라우팅할 준비가되도록 하려면 AngularJS의 Route 모듈을 포함해야 한다.

  Route module: `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>`

<br>
<br>

### &nbsp; 2) ngRoute 추가해주기

- `ngRoute`를 Application module에 종속성으로 추가해야 한다.

  EX) `var app = angular.module("myApp", ["ngRoute"]);`

<br>
<br>

### &nbsp; 3) `$routeProvider` 제공하기

- `$routeProvider`를 사용하여 애플리케이션에서 다른 경로를 구성합니다.
- `$routeProvider`를 사용하면 사용자가 링크를 클릭할 때 표시할 페이지를 정의 할 수 있다.
- `when(path, route);`의 Method(행동양식)를 가지며 `$route`서비스에 새로운 경로의 정의를 추가해 준다.
- `config` 메소드를 사용하여 `$routeProvider`를 정의하면 `config` 메소드에 등록된 작업은 어플리케이션이 로딩될 때 수행된다.

  ```
  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.htm"
    })
    .when("/red", {
      templateUrl : "red.htm"
    })
    .when("/green", {
      templateUrl : "green.htm"
    })
    .when("/blue", {
      templateUrl : "blue.htm"
    });
  });
  ```

<br>
<br>

### &nbsp; 4) `ng-view` 지시문 컨테이너

- 애플리케이션에는 라우팅에서 제공하는 콘텐츠를 넣을 컨테이너가 필요하다.
- 하나의 `ng-view` 지시문만 가질 수 있으며 이는 route에서 제공하는 모든 views의 대한 placeholder가 된다.
- 애플리케이션에 `ng-view` 지시문을 포함시키는 세 가지 방법이 있다.

  - `<div ng-view></div>` : ng-view 지시문을 DIV 요소에 대한 속성으로 사용하는 방법
  - `<ng-view></ng-view>` : ng-view 지시문을 element로 사용하는 방법
  - `<div class="ng-view"></div>` : ng-view 지시문을 DIV 요소에 대한 클래스 속성으로 사용하는 방법

<br>
<br>
<br>
<br>
<br>

## 03. Controller를 정의하여 `$routeProvider` 사용하기

<br>

&nbsp; `$routeProvider`를 사용해서 각 "View"에 대한 Controllers를 정의 할 수도 있다.

<br>

- **Examples : Add controllers**

  ```
  <body ng-app="myApp">

    <p>Click on the links.</p>

    <p><a href="#/!">Main</a></p>
    <a href="#!london">City 1</a>
    <a href="#!paris">City 2</a>

    <div ng-view></div>

    <script>
      var app = angular.module("myApp", ["ngRoute"]);
      app.config(function($routeProvider) {
          $routeProvider
          .when("/", {
              templateUrl : "main.htm",
          })
          .when("/london", {
              templateUrl : "london.htm",
              controller : "londonCtrl"
          })
          .when("/paris", {
              templateUrl : "paris.htm",
              controller : "parisCtrl"
          });
      });
      app.controller("londonCtrl", function ($scope) {
          $scope.msg = "I love London";
      });
      app.controller("parisCtrl", function ($scope) {
          $scope.msg = "I love Paris";
      });
    </script>

  </body>
  ```

  ```
  // london.htm

  <h1>London</h1>
  <h3>London is the capital city of England.</h3>
  <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
  <p>{{msg}}</p>
  ```

  ```
  //paris.html

  <h1>Paris</h1>
  <h3>Paris is the capital city of France.</h3>
  <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
  <p>{{msg}}</p>
  ```

  - 각 "View"에는 "msg"변수에 값을 제공하는 자체 컨트롤러가 있다.

  - `"london.htm"`과 `"paris.htm"`은 일반 HTML 파일이며 다른 HTML 섹션과 마찬가지로 AngularJS 표현식을 추가할 수 있다.

  - _url : https://www.w3schools.com/code/tryit.asp?filename=GLPULJE0LK7L_

<br>
<br>
<br>
<br>
<br>

## 04. Template 속성을 사용하여 HTML 직접 입력하기

<br>

1. 위의 예제들에서는 `$routeProvider.when` 메서드에서 `templateUrl` 속성을 사용했다.

2. 페이지를 참조하지 않고 직접 HTML을 작성할 수있는 `template` 속성(property)을 사용할 수도 있다.

<br>

- **Examples : `ng-view` 지시문에 표시된 HTML은 `$routeProvider.when` Method의 템플릿 속성에 작성된다.**

  ```
  <body ng-app="myApp">

    <p><a href="#/!">Main</a></p>
    <a href="#!banana">Banana</a>
    <a href="#!tomato">Tomato</a>

    <div ng-view></div>

    <script>
      var app = angular.module("myApp", ["ngRoute"]);
      app.config(function($routeProvider) {
          $routeProvider
          .when("/", {
              template : "<h1>Main</h1><p>Click on the links to change this content</p>"
          })
          .when("/banana", {
              template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>" // 직접 HTML을 작성
          })
          .when("/tomato", {
              template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
          });
      });
    </script>

  </body>
  ```

  _<small>url : https://www.w3schools.com/code/tryit.asp?filename=GLQMTQOOQ2W6</small>_

<br>
<br>
<br>
<br>
<br>
<br>

---

<br>

# 2. AngularJS Includes

<br>

#### &nbsp;&nbsp; AngularJS를 사용하면 외부 파일의 HTML을 포함시킬 수 있다.

<br>

&nbsp;&nbsp; _URL : https://www.w3schools.com/angular/angular_includes.asp_

<br>

---

<br>

## 01. Includes

<br>

1. 외부 HTML 조각들을 가져오고 컴파일하고 포함(Includes)시켜준다.

2. 기본적으로 template URL은 애플리케이션 문서와 동일한 도메인 및 프로토콜로 제한된다.

3. 다른 도메인 또는 프로토콜에서 템플릿을로드하려면 신뢰할 수있는 리소스 URL 목록에 추가하거나 신뢰할 수있는 값으로 래핑 할 수 있습니다.

4. 기본적으로 `ng-include` 지시문은 다른 도메인의 파일을 포함하는 것을 허용하지 않는다.

<br>
<br>
<br>

### 1) 문법

<br>

- **Examples 1 : as element**

  ```
  <ng-include
    src="string"
    [onload="string"]
    [autoscroll="string"]>
  ...
  </ng-include>
  ```

<br>

- **Examples 2 : as attribute**

  ```
  <ANY
    ng-include="string"
    [onload="string"]
    [autoscroll="string"]>
  ...
  </ANY>
  ```

  <small>_url : https://docs.angularjs.org/api/ng/directive/ngInclude_</small>

<br>
<br>
<br>

### 2) 예제

<br>

- **Examples 1 : `ng-include` 지시문을 사용하여 HTML 콘텐츠를 포함시킬 수 있다.**

  ```
  <body ng-app="">
    <div ng-include="'myFile.htm'"></div>
  </body>
  ```

<br>

- **Examples 2 : `ng-include` 지시문으로 포함하는 HTML 파일에는 AngularJS 코드도 포함될 수 있다.**

  ```
  // myTable.htm:

  <table>
    <tr ng-repeat="x in names">
      <td>{{ x.Name }}</td>
      <td>{{ x.Country }}</td>
    </tr>
  </table>
  ```

  웹 페이지에 위의 "myTable.htm" 파일을 포함 시키면 모든 AngularJS 코드가 실행된다.

  ```
  <body>
    <div ng-app="myApp" ng-controller="customersCtrl">
      <div ng-include="'myTable.htm'"></div>
    </div>

    <script>
      var app = angular.module('myApp', []);
      app.controller('customersCtrl', function($scope, $http) {
          $http.get("customers.php").then(function (response) {
              $scope.names = response.data.records;
          });
      });
    </script>

    <p>The HTML, and AngularJS code, for this table are located in the file "myTable.htm".</p>
  </body>
  ```

  <small>_url : https://www.w3schools.com/angular/tryit.asp?filename=try_ng_include_table_</small>
