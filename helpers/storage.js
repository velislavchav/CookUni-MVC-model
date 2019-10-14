const storage = function () {
    const appKey = 'kid_BkD48Vm7S';
    const appSecret = 'bd399859fa5f4f8d94f03563d16c354f';

    const getData = function (key) {
        return localStorage.getItem(key + appKey);
    };

    const saveData = function (key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function (data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser = function () {
        localStorage.removeItem('userInfo' + appKey);
        localStorage.removeItem('authToken' + appKey);
    };

    return {
        getData,
        saveUser,
        deleteUser,
        appKey,
        appSecret,
    }
}();