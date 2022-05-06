
var utilService = new UtilService();

function UtilService() {

}

// 사용자ID와 비밀번호를 RSA로 암호화한다.
UtilService.prototype.fnRsaEnc = function(value, rsaPublicKeyModulus, rsaPpublicKeyExponent) {
    var rsa = new RSAKey();
    rsa.setPublic(rsaPublicKeyModulus, rsaPpublicKeyExponent);
    var encValue = rsa.encrypt(value);
    return encValue;
};