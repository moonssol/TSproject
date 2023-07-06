"use strict";
// 가위 / 바위 / 보에 대한 공통화
// disabled 추가/제거에 대한 공통화
// 버튼 추가에 대한 공통화 (나중에 여러 버튼 생길 수도 있음.)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, event) {
        //인스턴스가 name을 가꼬 있어야 해.
        //객체 내 key/value라고 봤을 때, key값이 인스턴스 안의 name / value는 주입받은 값이다.
        this.name = name;
        var _this = this;
        this.buttonEl = document.createElement("button");
        this.buttonEl.setAttribute("disabled", "true");
        this.buttonEl.textContent = name;
        this.buttonEl.onclick = function () {
            event(_this); // this를 쓰게 되면 this는 buttonEl가 되어버림.
        };
    }
    //생성자 내 사용되는 메서드 같은 느낌
    Item.prototype.render = function (ParentEl) {
        ParentEl.append(this.buttonEl);
    };
    //호출을 한 사람이 this다.
    Item.prototype.disable = function (value) {
        if (value == true) {
            this.buttonEl.setAttribute("disabled", "true");
        }
        else {
            this.buttonEl.removeAttribute("disabled");
        }
    };
    return Item;
}());
exports.Item = Item;
