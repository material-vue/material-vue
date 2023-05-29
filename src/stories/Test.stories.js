import Test from '../components/Test.vue';

export default {
    title: 'test1',
    component: Test
}

export const FirstStory = {
    render: (args) => ({
        components: { Test },
        setup() {
            return { args };
        },
        template: '<Test v-bind="args"/>',
    }),
    args: {
        //👇 The args you need here will depend on your component
    },
};