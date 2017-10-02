
function getRandomString() {
	return Math.random().toString(36).substr(2).replace(/[^a-zA-Z0-9]+/g, '_');
}

var RANDOM_STRING = 'test_' + getRandomString();
var RANDOM_NUMBER = '09' + (Math.floor(Math.random() * 90000000) + 100000000);

describe('Kiểm tra combo-box "Tình trạng hôn nhân"', function () {
	describe('Tài khoản bác sĩ', function () {
		it('Đăng nhập...', function () {
			cy.visit(Cypress.env('URL_LOGIN'));
			cy.get('input[name=email]').type(Cypress.env('USER_DOCTOR'));
			cy.get('input[name=password]').type(Cypress.env('LOGIN_PASSWORD'));
			cy.get('button[type=submit]').click().should('not.exist');
		});

		describe('Quản lý bệnh nhân', function () {
			it('Thêm bệnh nhân...', function () {
				cy.get('li.nav-item > a[ui-sref="main.patients"]').click().wait(1000);
				cy.get('a.btn[href="/main/patients/new"]').click().wait(1000);
				cy.contains('div.portlet', 'Thông tin chi tiết').should('visible');
			});

			it('Nhập thông tin...', function () {
				cy.contains('div.form-group', 'Họ và tên').find('input').type('Hoàng Đăng Chấn');
				cy.contains('div.form-group', 'Ngày sinh').find('input').type('07/05/1954');

				cy.contains('div.form-group', 'Giới tính').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});
				cy.contains('div.form-group', 'Dân tộc').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});

				cy.contains('div.form-group', 'Điện thoại').find('input').type(RANDOM_NUMBER);

				cy.contains('div.form-group', 'Nghề nghiệp').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});
				cy.contains('div.form-group', 'Trình độ học vấn').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});
				cy.contains('div.form-group', 'Tình hình tài chính').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});

				cy.contains('div.form-group', 'Ngày vào điều trị').find('input').type('30/04/1975');
				cy.contains('div.form-group', 'Nơi giới thiệu').find('input').type(RANDOM_STRING);

				cy.contains('div.form-group', 'Tỉnh/Thành phố thường trú').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});
				cy.contains('div.form-group', 'Huyện/Quận thường trú').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});
				cy.contains('div.form-group', 'Xã/Thị Trấn thường trú').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});

				cy.contains('div.form-group', 'Thôn/Ấp thường trú').find('input').type(RANDOM_STRING);
				cy.contains('div.form-group', 'Địa chỉ thường trú').find('input').type(RANDOM_STRING);

				cy.contains('div.form-group', 'Tỉnh/Thành phố tạm trú').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});
				cy.contains('div.form-group', 'Huyện/Quận tạm trú').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});
				cy.contains('div.form-group', 'Xã/Thị Trấn tạm trú').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});

				cy.contains('div.form-group', 'Thôn/Ấp tạm trú').find('input').type(RANDOM_STRING);
				cy.contains('div.form-group', 'Địa chỉ tạm trú').find('input').type(RANDOM_STRING);

				cy.contains('div.form-group', 'Loại giấy tờ').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});

				cy.contains('div.form-group', 'Số').find('input').type(RANDOM_NUMBER);
				cy.contains('div.form-group', 'Ngày cấp').find('input').type('01/01/1975');
				cy.contains('div.form-group', 'Nơi cấp').find('input').type(RANDOM_STRING);

				// THÔNG TIN NGƯỜI THÂN
				cy.contains('div.contact-form div.form-group', 'Họ và tên').find('input').type('Hoàng Đăng An');

				cy.contains('div.contact-form div.form-group', 'Mối quan hệ').find('a.select2-choice').click();
				cy.get('div.ui-select-container div.ui-select-choices-row-inner').then(function (obj) {
					obj[Math.floor(Math.random() * obj.length)].click();
				});

				cy.contains('div.contact-form div.form-group', 'Địa chỉ').find('input').type(RANDOM_STRING);
				cy.contains('div.contact-form div.form-group', 'Điện thoại').find('input').type(RANDOM_NUMBER);
			});

			it('THEMMOI_BN_41 Kiểm tra thông tin không bắt buộc', function () {
				cy.get('button.btn > i.fa-save').click().wait(1000);
				cy.contains('div.toast', 'Tạo mới thành công').should('exist');
			});

			/*

			it('THEMMOI_BN_38 Kiểm tra giá trị mặc định', function () {
			cy.contains('div.form-group', 'Tình trạng hôn nhân').find('span.select2-chosen').contains('-- Vui lòng chọn --').should('visible');
			});
			it('THEMMOI_BN_39 Kiểm tra số lượng và sắp xếp các giá trị trong combo', function () {
			cy.contains('div.form-group', 'Tình trạng hôn nhân').find('a.select2-choice').click();
			cy.get('div.ui-select-container div.ui-select-choices-row-inner').should(function (elements) {
			for (var i = 1; i < elements.length; i++) {
			expect(elements[i].textContent > elements[i - 1].textContent).to.be.true;
			}
			});
			});
			it('THEMMOI_BN_40 Kiểm tra căn lề', function () {
			cy.get('div.ui-select-container div.ui-select-choices-row-inner').should('have.css','text-align','left');
			});

			//cy.contains('div.modal-dialog button[type=submit]', 'Lưu').click().should('not.exist');
			 */
		});
	});
});
