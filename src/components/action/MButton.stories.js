import MButton from './MButton.vue';
import '../../assets/global.css';

export default {
    title: 'Button',
    component: MButton,
    argTypes: {
        type: {
            options: ['filled', 'filled-tonal', 'outlined'],
            control: {type: 'radio'}
        },
    },
}

export const Button = {
    render: (args) => ({
        components: { MButton },
        setup() {
            return { args };
        },
        template: '<MButton v-bind="args">{{args.slot}}</MButton>',
    }),
    args: {
        type: 'filled',
        slot: 'Label'
    },
};

export const ButtonWithIcon = {
    render: (args) => ({
        components: { MButton },
        setup() {
            return { args };
        },
        template: '<MButton v-bind="args"><span class="material-symbols-outlined">{{args.icon_name}}</span>{{args.slot}}</MButton>',
    }),
    args: {
        type: 'filled',
        slot: 'Label',
        icon_name: 'menu'
    },
};