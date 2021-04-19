import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import User from "@/class/user";

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        authentication: {
            status: {
                loggedIn: boolean;
            };
            user: User;
        };
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
