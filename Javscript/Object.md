<br>

# 01. 객체(Object)

<br>

URL : https://ko.javascript.info/object

<br>

---

<br>

## 1. 객체란?

객체는 중괄호 {…}를 이용해 만들 수 있습니다. 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다. 프로퍼티 키는 ‘프로퍼티 이름’ 이라고도 부릅니다.

서랍장을 상상하면 객체를 이해하기 쉽습니다. 서랍장 안 파일은 프로퍼티, 파일 각각에 붙어있는 이름표는 객체의 키라고 생각하시면 됩니다. 복잡한 서랍장 안에서 이름표를 보고 원하는 파일을 쉽게 찾을 수 있듯이, 객체에선 키를 이용해 프로퍼티를 쉽게 찾을 수 있습니다. 추가나 삭제도 마찬가지입니다.

<br>

빈 객체(빈 서랍장)를 만드는 방법은 두 가지가 있습니다.

<br>

- '객체 생성자' 문법: `let user = new Object();`

- '객체 리터럴' 문법: `let user = {}`

<br>
<br>
<br>

## 2. 리터럴과 프로퍼티

<br>

중괄호 `{...}` 안에는 ‘키: 값’ 쌍으로 구성된 프로퍼티가 들어갑니다. '콜론(`:`)'을 기준으로 왼쪽엔 키가, 오른쪽엔 값이 위치합니다. 프로퍼티 키는 프로퍼티 ‘이름’ 혹은 '식별자’라고도 부릅니다.

<br>

- **Examples:**

  ```
  let user = {     // 객체
    name: "John",  // 키: "name",  값: "John"
    age: 30,        // 키: "age", 값: 30
    "likes birds": true,   // 복수의 단어는 따옴표로 묶어야 합니다.
  };


  // 프로퍼티 값 얻기
  alert(user.name); // John
  alert(user.age); // 30
  alert(["likes birds"]) // true
  ```

  - 객체 user에는 프로퍼티가 두 개 있습니다.

  - 서랍장(객체 user) 안에 파일 두 개(프로퍼티 두 개)가 담겨있는데, 각 파일에 `“name”`, `"age"`라는 이름표가 붙어있다고 생각하시면 쉽습니다.

  - 서랍장에 파일을 추가하고 뺄 수 있듯이 개발자는 프로퍼티를 추가, 삭제할 수 있습니다.

  - `user.name`처럼 점 표기법(dot notation)을 이용하면 프로퍼티 값을 읽는 것도 가능합니다.

<br>
<br>
<br>

## 3. 대괄호 표기법

<br>

대괄호 표기법을 사용하면 아래 예시에서 변수를 키로 사용한 것과 같이 문자열뿐만 아니라 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있습니다.

<br>

- **Examples:**

  ```
  let key = "likes birds";

  // 위의 user["likes birds"] = true; 와 같습니다.
  user[key] = true;


  let user = {
    name: "John",
    age: 30
  };

  let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

  // 변수로 접근
  alert( user[key] ); // John (프롬프트 창에 "name"을 입력한 경우)
  ```

  > 변수 key는 런타임에 평가되기 때문에 사용자 입력값 변경 등에 따라 값이 변경될 수 있습니다. 어떤 경우든, 평가가 끝난 이후의 결과가 프로퍼티 키로 사용됩니다. 이를 응용하면 코드를 유연하게 작성할 수 있습니다.

<br>
<br>
<br>

## 4. 계산된 프로퍼티

<br>

객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 이를 계산된 프로퍼티(computed property) 라고 부릅니다.

  <br>

- **Examples:**

  ```
  let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

  let bag = {
    [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
  };

  alert( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.
  ```

  > 위 예시에서 `[fruit]`는 프로퍼티 이름을 변수 `fruit`에서 가져오겠다는 것을 의미합니다.  
  > 사용자가 프롬프트 대화상자에 apple을 입력했다면 `bag`엔 `{apple: 5}`가 할당되었을 겁니다.  
  > 아래 예시는 위 예시와 동일하게 동작합니다.

  ```
  let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
  let bag = {};

  // 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
  bag[fruit] = 5;
  ```

  > 한편, 다음 예시처럼 대괄호 안에는 복잡한 표현식이 올 수도 있습니다.

  ```
  let fruit = 'apple';
  let bag = {
    [fruit]: 5 // bag.apple = 5
  };
  ```

  > 이런 이유로 프로퍼티 이름이 확정된 상황이고, 단순한 이름이라면 처음엔 점 표기법을 사용하다가  
  > 뭔가 복잡한 상황이 발생했을 때 대괄호 표기법으로 바꾸는 경우가 많습니다.

<br>
<br>
<br>

## 5. 단축 프로퍼티

<br>

실무에선 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 종종 있습니다.

<br>

- **Examples:**

  ```
  function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...등등
    };
  }

  let user = makeUser("John", 30);
  alert(user.name); // John`
  ```

  > 이렇게 변수를 사용해 프로퍼티를 만드는 경우는 아주 흔한데,  
  > 프로퍼티 값 단축 구문(property value shorthand) 을 사용하면 코드를 짧게 줄일 수 있습니다.
  >
  > 아래 예시처럼 `name:name` 대신 `name`만 적어주어도 프로퍼티를 설정할 수 있죠.

  ```
  function makeUser(name, age) {
    return {
      name,   // name: name 과 같음
      age: 30 // 한 객체에서 일반 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능하다.
    };
  }
  ```

<br>
<br>
<br>

## 6. ‘in’ 연산자로 프로퍼티 존재 여부 확인하기

<br>

자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다는 것입니다. 이런 특징을 응용하면 프로퍼티 존재 여부를 쉽게 확인할 수 있습니다.

<br>

- **Examples:**

  ```
  let user = { name: "John", age: 30 };

  alert( "age" in user ); // user.age가 존재하므로 true가 출력됩니다.
  alert( "blabla" in user ); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.
  ```

  > in 왼쪽엔 반드시 프로퍼티 이름이 와야 합니다. 프로퍼티 이름은 보통 따옴표로 감싼 문자열입니다.
  > 따옴표를 생략하면 아래 예시와 같이 엉뚱한 변수가 조사 대상이 됩니다.

  ```
  let user = { age: 30 };

  let key = "age";
  alert( key in user ); // true, 변수 key에 저장된 값("age")을 사용해 프로퍼티 존재 여부를 확인합니다.
  ```

<br>
<br>
<br>

## 7. ‘for…in’ 반복문

<br>

for..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있습니다. for..in은 앞서 학습했던 for(;;) 반복문과는 완전히 다릅니다.

<br>

- **Examples:**

  ```
  for (key in object) {
    // 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행합니다.
  }
  ```

  아래 예시를 실행하면 객체 user의 모든 프로퍼티가 출력됩니다.

  ```
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

  for (let key in user) {
    // 키
    alert( key );  // name, age, isAdmin
    // 키에 해당하는 값
    alert( user[key] ); // John, 30, true
  }
  ```

  - for..in 반복문에서도 for(;;)문처럼 반복 변수(looping variable)를 선언(let key)했다는 점에 주목해 주시기 바랍니다.

  - 반복 변수명은 자유롭게 정할 수 있습니다. 'for (let prop in obj)'같이 key 말고 다른 변수명을 사용해도 괜찮습니다.

<br>
<br>
<br>

## 8. 객체 정렬 방식

<br>

객체와 객체 프로퍼티를 다루다 보면 "프로퍼티엔 순서가 있을까?"라는 의문이 생기기 마련입니다. 반복문은 프로퍼티를 추가한 순서대로 실행될지, 그리고 이 순서는 항상 동일할지 궁금해지죠.

답은 간단합니다. 객체는 '특별한 방식으로 정렬’됩니다. 정수 프로퍼티(integer property)는 자동으로 정렬되고, 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬됩니다. 자세한 내용은 예제를 통해 살펴봅시다.

<br>

- **Examples:**

  ```
  let codes = {
    "49": "독일",
    "41": "스위스",
    "44": "영국",
    // ..,
    "1": "미국"
  };

  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }
  ```

  > 위 객체엔 국제전화 나라 번호가 담겨있습니다. 현재 개발 중인 애플리케이션의 주 사용자가 독일인이라고 가정해 봅시다.  
  > 나라 번호를 선택하는 화면에서 49가 맨 앞에 오도록 하는 게 좋을 겁니다.
  >
  > 그런데 코드를 실행해 보면 예상과는 전혀 다른 결과가 출력됩니다.  
  > 미국(1)이 첫 번째로 출력되고 그 뒤로 스위스(41), 영국(44), 독일(49)이 차례대로 출력됩니다.  
  > 이유는 나라 번호(키)가 정수이어서 1, 41, 44, 49 순으로 프로퍼티가 자동 정렬되었기 때문입니다.
  >
  > 한편, 키가 정수가 아닌 경우엔 작성된 순서대로 프로퍼티가 나열됩니다. 예시를 살펴봅시다.

  ```
  let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // 프로퍼티를 하나 추가합니다.

  // 정수 프로퍼티가 아닌 프로퍼티는 추가된 순서대로 나열됩니다.
  for (let prop in user) {
    alert( prop ); // name, surname, age
  }
  ```

  > 위 예시에서 49(독일 나라 번호)를 가장 위에 출력되도록 하려면 나라 번호가 정수로 취급되지 않도록 속임수를 쓰면 됩니다.  
  > 각 나라 번호 앞에 "+"를 붙여봅시다.

  ```
  let codes = {
    "+49": "독일",
    "+41": "스위스",
    "+44": "영국",
    // ..,
    "+1": "미국"
  };

  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }
  ```

  > 이제 원하는 대로 독일 나라 번호가 가장 먼저 출력되는 것을 확인할 수 있습니다.

<br>
<br>
<br>

## 9. 요약

<br>

#### &nbsp;&nbsp;1) 객체는 몇 가지 특수한 기능을 가진 연관 배열(associative array)이다.

- 객체는 프로퍼티(키-값 쌍)를 저장합니다.

- 프로퍼티 키는 문자열이나 심볼이어야 합니다. 보통은 문자열입니다.

- 값은 어떤 자료형도 가능합니다.

<br>

#### &nbsp;&nbsp;2) 프로퍼티 접근법

- 점 표기법: `obj.property`

- 대괄호 표기법 `obj["property"]`

- 대괄호 표기법을 사용하면 `obj[varWithKey]`같이 변수에서 키를 가져올 수 있습니다.

<br>

#### &nbsp;&nbsp;3) 객체에서 추가 연산자 사용가능.

- 프로퍼티를 삭제하고 싶을 때: `delete obj.prop`

- 해당 key를 가진 프로퍼티가 객체 내에 있는지 확인하고자 할 때: `"key" in obj`

- 프로퍼티를 나열할 때: `for (let key in obj)`

<br>

#### &nbsp;&nbsp;4) 다양한 종류의 객체

- Array – 정렬된 데이터 컬렉션을 저장할 때 쓰임
- Date – 날짜와 시간 정보를 저장할 때 쓰임
- Error – 에러 정보를 저장할 때 쓰임
- 기타 등등

<br>
<br>
<br>

## 10. 연습문제

<br>

&nbsp;&nbsp;&nbsp;&nbsp; URL : https://ko.javascript.info/object#ref-194

<br>
<br>
<br>
<br>
<br>
<br>
<br>

---

<br>

# 02. 객체(Object) - 참조에 의한 객체 복사

<br>

URL : https://ko.javascript.info/object-copy#ref-611

<br>

---

<br>
<br>

객체와 원시 타입의 근본적인 차이 중 하나는 원시값(문자열, 숫자, 불린 값)은 ‘값 그대로’ 저장·할당되고 복사되는 반면, 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다는 것입니다.

<br>

```
let message = "Hello!";

let phrase = message;
```

위 예시를 실행하면 두 개의 독립된 변수에 각각 문자열 "Hello!"가 저장됩니다.

<br>

객체의 동작방식은 이와 다릅니다. 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장됩니다.

객체는 메모리 내 어딘가에 저장되고, 변수 user엔 객체를 '참조’할 수 있는 값이 저장됩니다. 따라서 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않습니다.

<br>

- **Example:**

  ```
  let user = { name: "John" };

  let admin = user; // 참조값을 복사함(변수는 두 개이지만 각 변수엔 동일 객체에 대한 참조 값이 저장된다.)


  admin.name = 'Pete'; // 'admin' 참조 값에 의해 변경됨

  alert(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함
  ```

  - 객체를 서랍장에 비유하면 변수는 서랍장을 열 수 있는 열쇠라고 할 수 있습니다. 서랍장은 하나, 서랍장을 열 수 있는 열쇠는 두 개인데, 그중 하나(admin)를 사용해 서랍장을 열어 정돈한 후, 또 다른 열쇠로 서랍장을 열면 정돈된 내용을 볼 수 있습니다.

<br>
<br>
<br>

## 1) 참조에 의한 비교

<br>

객체 비교 시 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작합니다. 비교 시 피연산자인 두 객체가 동일한 객체인 경우에 참을 반환하죠. 두 변수가 같은 객체를 참조하는 예시를 살펴봅시다. 일치·동등 비교 모두에서 참이 반환됩니다.

```
let a = {};
let b = a; // 참조에 의한 복사

alert( a == b ); // true, 두 변수는 같은 객체를 참조합니다.
alert( a === b ); // true
```

<br>

다른 예시를 살펴봅시다. 두 객체 모두 비어있다는 점에서 같아 보이지만, 독립된 객체이기 때문에 일치·동등 비교하면 거짓이 반환됩니다.

```
let a = {};
let b = {}; // 독립된 두 객체

alert( a == b ); // false
```

<br>

obj1 > obj2 같은 대소 비교나 obj == 5 같은 원시값과의 비교에선 객체가 원시형으로 변환됩니다. 객체가 어떻게 원시형으로 변하는지에 대해선 곧 학습할 예정인데, 이러한 비교(객체끼리의 대소 비교나 원시값과 객체를 비교하는 것)가 필요한 경우는 매우 드물긴 합니다. 대개 코딩 실수 때문에 이런 비교가 발생합니다.

<br>
<br>
<br>
<br>
<br>

## 2) 객체 복사 및 객체 병합과 `Object.assign`

<br>
<br>

### 1. 객체 복사

<br>

객체의 복사는 참조에 의한 복사로 해결 가능한 일이 대다수지만, 복제가 필요한 상황이라면 새로운 객체를 만든 다음 기존 객체의 프로퍼티들을 순회해 원시 수준까지 프로퍼티를 복사하면 됩니다.

<br>

```
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
  clone[key] = user[key];
}

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
clone.name = "Pete"; // clone의 데이터를 변경합니다.

alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.
```

<br>
<br>
<br>

### 2. `Object.assign`

<br>

Object.assign() 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용합니다. 대상 객체를 반환합니다.

<br>

- 문법과 동작방식 : `Object.assign(dest, [src1, src2, src3...])`

  - 첫 번째 인수 `dest`는 목표로 하는 객체입니다.

  - 이어지는 인수 `src1`~`srcN`는 복사하고자 하는 객체입니다. 필요에 따라 얼마든지 많은 객체를 인수로 사용할 수 있습니다.

  - 객체 `src1`~`srcN`의 프로퍼티를 `dest`에 복사합니다. `dest`를 제외한 인수(객체)의 프로퍼티 전부가 첫 번째 인수(객체)로 복사됩니다.

  - 마지막으로 dest를 반환합니다.

<br>

- **Example:**

  ```
  let user = { name: "John" };

  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };

  // permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
  Object.assign(user, permissions1, permissions2);

  // now user = { name: "John", canView: true, canEdit: true }
  ```

  목표 객체(user)에 동일한 이름을 가진 프로퍼티가 있는 경우엔 기존 값이 덮어씌워 집니다.

  ```
  let user = { name: "John" };

  Object.assign(user, { name: "Pete" });

  alert(user.name);   //user = { name: "Pete" }
  ```

  예시를 실행하면 user에 있는 모든 프로퍼티가 빈 배열에 복사되고 변수에 할당됩니다.

<br>
<br>
<br>

### 3. 중첩 객체 복사

<br>

지금까진 user의 모든 프로퍼티가 원시값인 경우만 가정했습니다. 그런데 프로퍼티는 아래의 경우처럼 다른 객체에 대한 참조 값일 수도 있습니다. 이 경우는 어떻게 해야 할까요?

<br>

```
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height );   // 182


let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes );  // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user.sizes.width++;         // 한 객체에서 프로퍼티를 변경합니다.
alert(clone.sizes.width);   // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.
```

`clone.sizes = user.sizes`로 프로퍼티를 복사하는 것만으론 객체를 복제할 수 없습니다. `user.sizes`는 객체이기 때문에 참조 값이 복사되기 때문입니다. `clone.sizes = user.sizes`로 프로퍼티를 복사하면 `clone`과 `user`는 같은 `sizes`를 공유하게 됩니다.

이 문제를 해결하려면 `user[key]`의 각 값을 검사하면서, 그 값이 객체인 경우 객체의 구조도 복사해주는 반복문을 사용해야 합니다. 이런 방식을 '깊은 복사(deep cloning)'라고 합니다.

자바스크립트 라이브러리 lodash의 메서드인 \_.cloneDeep(obj)을 사용하면 이 알고리즘을 직접 구현하지 않고도 깊은 복사를 처리할 수 있으므로 참고하시기 바랍니다.

<br>
<br>

---
