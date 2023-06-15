    VK.init({
      apiId: 51642584
    });

    function login() {
      VK.Auth.login(function(response) {
        if (response.session) {
          // пользователь авторизован
          var userId = response.session.mid;
          var accessToken = response.session.access_token;

          // получаем данные о пользователе
          VK.api('users.get', {user_id: userId, fields: 'photo_100'}, function(data) {
            var user = data.response[0];
            var userName = user.first_name + ' ' + user.last_name;
            var userPhoto = user.photo_100;

            // отображаем имя и аватарку пользователя
            document.getElementById('user-name').innerHTML = userName;
            document.getElementById('user-photo').src = userPhoto;

            // отображаем кнопку выхода
            document.getElementById('logout-button').style.display = 'block';
          });
        } else {
          // пользователь отменил авторизацию
        }
      }, VK.access.FRIENDS);
    }

    function logout() {
      VK.Auth.logout(function() {
        // пользователь вышел из системы
        document.getElementById('user-name').innerHTML = '';
        document.getElementById('user-photo').src = '';
        document.getElementById('logout-button').style.display = 'none';
      });
    }