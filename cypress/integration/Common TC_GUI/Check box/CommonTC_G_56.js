describe('Kiểm tra giá trị mặc định ch', function () {
  describe('CommonTC_G_56 Kiểm tra giá trị mặc định', function () {
    describe('Tài khoản quản trị hệ thống', function () {
		it('Đăng nhập...', function () {
			cy.visit(Cypress.env('URL_LOGIN'));
			cy.get('input[name=email]').type(Cypress.env('USER_AGENCY'));
			cy.get('input[name=password]').type(Cypress.env('LOGIN_PASSWORD'));
			cy.get('button[type=submit]').click().should('not.exist');		
		});
	   describe('Quản lý bệnh nhân', function () {
		it('Chuyển trang...', function () {
		 cy.get('li.nav-item > a[ui-sref="main.patients"]').click().wait(1000);
		});
	   //
		it('Thêm đơn thuốc ...', function () {
		  cy.contains('div.actions > a.btn', ' Thêm đơn thuốc').click();
		});
		it('Checkbox Thêm thuốc > Chia liều', function () {
		  cy.contains('label.mt-checkbox','Chia liều').find('input').should('not.be.checked');
		});
		it('Checkbox Thêm thuốc > Giảm liều', function () {
		 	cy.contains('label.mt-checkbox','Giảm liều').find('input').should('not.be.checked');
		});
		it('Đóng...', function () {
		  cy.contains('div.modal-dialog', 'Thêm đơn thuốc').find('input.btn[value="Đóng"]').should('visible').click();
		});
               //
		it('Chuyển cơ sở...', function (){
		  cy.contains('div.actions > a.btn', 'Chuyển cơ sở').click().wait(100);
		});
		it('Checkbox Chuyển tạm thời', function () {
		  cy.contains('label.mt-checkbox','Chuyển cơ sở tạm thời').find('input').should('not.be.checked');
		});
		it('Đóng...', function () {
		  cy.contains('div.modal-dialog', 'Chuyển cơ sở').find('input.btn[value="Đóng"]').should('visible').click();
		});
	    });	
	
    });
  });
});
