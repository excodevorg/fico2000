<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/inc/common.jsp" %>
<%

String publicKeyModulus = (String) request.getAttribute("publicKeyModulus");
String publicKeyExponent = (String) request.getAttribute("publicKeyExponent");

%>
<div id="content-container">
                
                <!--Page Title-->
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <div id="page-title">
                    <h1 class="page-header text-overflow text-center">View Profile</h1>
                </div>
                <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                <!--End page title-->

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    
					<div class="row">
					    <div class="col-lg-6 col-lg-offset-3">
					        <div class="panel">
					            <div class="panel-heading">
					                <h3 class="panel-title">프로필 수정하기</h3>
					            </div>
					
					            <form id="demo-bvd-notempty" action="forms-validation.html" class="form-horizontal">
					                <div class="panel-body">
					                    <div class="text-center mar-btm">
                                            <img id="imgUrl" src="/bootstrap/thema/fico2000/img/profile-photos/<%=imgUrl%>" class="img-md img-circle" alt="Avatar"><br><br>
											    <!-- The fileinput-button span is used to style the file input field as button -->
												<span class="btn btn-success fileinput-button">
													<i class="glyphicon glyphicon-plus"></i>
													<span>Select profile-photo</span>
													<!-- The file input field used as target for the file upload widget -->
													<input id="fileupload" type="file" name="file" multiple>
												</span>
                                        </div>

										<div class="alert alert-danger" role="alert">
                            				<span id="errMsg"></span>
                        				</div>
					   
                                        <input id="userNm" type="text" class="form-control mar-btm input-lg" name="userNm" placeholder="이름">
                                        <input id="userId" type="text" class="form-control mar-btm input-lg" name="userId" placeholder="이메일" disabled="disabled">
                                        
					                    <br>
					                    <p class="bord-btm pad-ver text-main text-bold">
                                            <input id="chkBoxPW" class="magic-checkbox" type="checkbox">
                                            <label for="chkBoxPW">비밀번호 변경</label>
                                        </p>
					
					                    <!--IDENTICAL VALIDATOR-->
					                    <!--===================================================-->
                                        <fieldset>
					                        <div class="form-group">
                                                <div class="col-lg-10 col-lg-offset-1">
					                               <input id="pwip0" type="password" class="form-control input-lg" name="userPwd" name="oldpassword" placeholder="기존 비밀번호">
                                                </div>
					                        </div>
					                    </fieldset>
					                    <fieldset>
					                        <div class="form-group">
					                            <div class="col-lg-10 col-lg-offset-1">
					                                <input id="pwip1"  type="password" class="form-control input-lg" name="userPwd2" name="password" placeholder="새로운 비밀번호">
					                            </div>
					                        </div>
					                        <div class="form-group">
					                            <div class="col-lg-10 col-lg-offset-1">
					                                <input id="pwip2"  type="password" class="form-control input-lg" name="newUserPwd" name="confirmPassword" placeholder="새로운 비밀번호 확인">
					                            </div>
					                        </div>
					                    </fieldset>

										<input type='hidden' class="form-control" name="publicKeyModulus" id="publicKeyModulus" value="<%=publicKeyModulus%>">
                						<input type='hidden' class="form-control" name="publicKeyExponent" id="publicKeyExponent" value="<%=publicKeyExponent%>">
					                    
                                        <div class="text-center mar-top">
                                            <a id="onModify" class="btn btn-primary btn-lg">회원정보 수정</a>&nbsp;&nbsp;&nbsp;
                                        </div>
																	
					                    <!--===================================================-->
					                </div>
					            </form>
					        </div>
					    </div>
					</div>
					
					
					
                </div>
                <!--===================================================-->
                <!--End page content-->


            </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

<script src="/bootstrap/thema/fico2000/js/app/main/MAIN02000M00Component.js"></script>

<script>

	var uploadUrl = window.location.protocol + "//" + window.location.host + "/cmmn/uploadImgFile.do";

    $(document).ready(function() {

        $(".alert").hide(true);

		MAIN02000M00.enablePWBox();

		$("#userNm").val('<%=loginText%>');
		$("#userId").val('<%=loginUserId%>');

		userParam.imgUrl = '<%=imgUrl%>';

		$('#chkBoxPW').click(function(){ 

			overlay.show();

			console.log(userParam.pwdMdfcYn);

			if (userParam.pwdMdfcYn == 'N') {
				<% if (isPassword) { %>				
				MAIN02000M00.disablePWBox();
				<% } else { %>
				MAIN02000M00.disablePWBox01();	
				<% } %>
				userParam.pwdMdfcYn = 'Y';
			} else {
				MAIN02000M00.enablePWBox();
				userParam.pwdMdfcYn = 'N';
			}

			
		});

		$("#onModify").click(function() {
			MAIN02000M00.onModify();
		});

		$('#fileupload').fileupload({
				url: uploadUrl,
				dataType: 'json',
				done: function (e, data) {
					console.log('data >>> ' , data);

					if (!data.error) {
						console.log('정상 업로드');
						$("#imgUrl").attr("src",data.result.path);
						userParam.imgUrl = data.result.fileName;
					}

				},
				fail: function(e, data) {
					console.log('data 1111>>> ' , data);
					bootbox.alert('이미지 업로 중 오류가 발생했습니다. 담당자에게 문의 바랍니다.');
				}
		});

    });

  </script>
