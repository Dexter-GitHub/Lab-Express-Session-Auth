module.exports = {
    isOwner:function (request, response) {	
        console.log(request.session.is_logined);
        console.log(request.session.nickname);
        if (request.session.is_logined) {
            return true;
        }
        else {
            return false;
        }
    },
    statusUI:function (request, response) {
        var authStatusUI = '<a href="/auth/login">login</a>';
        if (this.isOwner(request, response)) {
            authStatusUI = ` ${request.session.nickname} | <a href="/auth/logout">logout</a>`;
        }

        return authStatusUI;
    }
}