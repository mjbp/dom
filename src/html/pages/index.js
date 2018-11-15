import { h } from '../../../tools/dom';
import LoginLayout from '../layouts/login';
import Logo from '../components/logo';

const LoginPage = () => <LoginLayout>
    <Logo fillStorm={'#191919'} />
    <form class="login__form">
        <fieldset>
            <h1 class="form__legend u-hidden">Login</h1>
            <div class="form__row">
                <label class="label" for="un">UserName</label>
                <input class="input" type="text" id="un" name="un" autocomplete="false" />
            </div>
            <div class="form__row">
                <label class="label" for="pwd">Password</label>
                <input class="input" type="password" id="pwd" name="pwd" autocomplete="false" />
            </div>
            <div class="u-align__right">
                <a class="btn" href="/home.html">Log in</a>
            </div>
        </fieldset>
    </form>
</LoginLayout>;

export default LoginPage;