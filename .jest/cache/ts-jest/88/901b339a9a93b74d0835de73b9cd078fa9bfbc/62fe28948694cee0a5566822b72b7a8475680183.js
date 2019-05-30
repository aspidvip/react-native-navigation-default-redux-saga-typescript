"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    }
});
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            enthusiasmLevel: 12
        };
        return _this;
    }
    Test.prototype.render = function () {
        var name = this.props.name;
        var enthusiasmLevel = this.state.enthusiasmLevel;
        return (react_1.default.createElement(react_native_1.View, { style: styles.root },
            react_1.default.createElement(react_native_1.Text, null,
                enthusiasmLevel,
                " - ",
                name)));
    };
    return Test;
}(react_1.default.Component));
exports.Test = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FzcGlkL0Rlc2t0b3AvUHJvamVjdHMvaW5mby9zcmMvc2NyZWVucy9UZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsNkNBQXNEO0FBRXRELElBQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFNBQVMsRUFBRSxRQUFRO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFDO0FBV0g7SUFBMEIsd0JBQTZCO0lBQ3JELGNBQVksS0FBWTtRQUF4QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBRUQsV0FBSyxHQUFHO1lBQ04sZUFBZSxFQUFFLEVBQUU7U0FDcEIsQ0FBQzs7SUFKRixDQUFDO0lBTUQscUJBQU0sR0FBTjtRQUNVLElBQUEsc0JBQUksQ0FBZ0I7UUFDcEIsSUFBQSw0Q0FBZSxDQUFnQjtRQUN2QyxPQUFPLENBQ0wsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDdEIsOEJBQUMsbUJBQUk7Z0JBQ0YsZUFBZTs7Z0JBQUssSUFBSSxDQUNwQixDQUNGLENBQ1IsQ0FBQztJQUNKLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUEwQixlQUFLLENBQUMsU0FBUyxHQW9CeEM7QUFwQlksb0JBQUkiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FzcGlkL0Rlc2t0b3AvUHJvamVjdHMvaW5mby9zcmMvc2NyZWVucy9UZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBUZXh0LCBWaWV3IH0gZnJvbSBcInJlYWN0LW5hdGl2ZVwiO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHJvb3Q6IHtcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIlxuICB9XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ29nbz86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgZW50aHVzaWFzbUxldmVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBlbnRodXNpYXNtTGV2ZWw6IDEyXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVudGh1c2lhc21MZXZlbCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAge2VudGh1c2lhc21MZXZlbH0gLSB7bmFtZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==