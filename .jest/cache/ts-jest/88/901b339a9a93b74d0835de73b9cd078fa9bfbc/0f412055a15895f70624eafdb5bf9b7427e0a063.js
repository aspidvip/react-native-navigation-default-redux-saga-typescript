"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var Test_1 = require("../src/screens/Test");
it("renders correctly with defaults", function () {
    var button = react_test_renderer_1.default.create(react_1.default.createElement(Test_1.Test, { name: "World" })).toJSON();
    expect(button).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FzcGlkL0Rlc2t0b3AvUHJvamVjdHMvaW5mby9fX3Rlc3RzX18vVGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsNEVBQTJDO0FBRTNDLDRDQUEyQztBQUUzQyxFQUFFLENBQUMsaUNBQWlDLEVBQUU7SUFDcEMsSUFBTSxNQUFNLEdBQUcsNkJBQVEsQ0FBQyxNQUFNLENBQUMsOEJBQUMsV0FBSSxJQUFDLElBQUksRUFBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYXNwaWQvRGVza3RvcC9Qcm9qZWN0cy9pbmZvL19fdGVzdHNfXy9UZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIjtcblxuaW1wb3J0IHsgVGVzdCB9IGZyb20gXCIuLi9zcmMvc2NyZWVucy9UZXN0XCI7XG5cbml0KFwicmVuZGVycyBjb3JyZWN0bHkgd2l0aCBkZWZhdWx0c1wiLCAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IHJlbmRlcmVyLmNyZWF0ZSg8VGVzdCBuYW1lPVwiV29ybGRcIiAvPikudG9KU09OKCk7XG4gIGV4cGVjdChidXR0b24pLnRvTWF0Y2hTbmFwc2hvdCgpO1xufSk7XG4iXSwidmVyc2lvbiI6M30=