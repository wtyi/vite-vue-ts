import { defineComponent, Ref, ref } from "vue";

type AppProps = {};

export default defineComponent<AppProps>((props, ctx) => {
    console.log("render app");
    const count = ref(0);

    const inputVal = ref("");

    const increment = () => {
        count.value++;
    };

    const decrement = () => {
        count.value--;
    };

    return () => (
        <div>
            <h1>666</h1>
            <Show title={count} />
            <Buttons incr={increment} decr={decrement}></Buttons>

            <input
                type="text"
                v-model={inputVal.value}
                placeholder="填多少有多少/ 按回车"
                onKeydown={(e) => {
                    if (e.key == "Enter") {
                        // 改变count 自己重置
                        const num = Number(inputVal.value);
                        if (!Number.isNaN(num)) {
                            count.value = num;
                        }
                        inputVal.value = "";
                    }
                }}
            />
        </div>
    );
});

type HeaderProps = {
    title: Ref<number>;
};
const Show = (props: HeaderProps) => {
    console.log(props);
    return <div>{props.title.value}</div>;
};

type ButtonProps = {
    incr: () => void;
    decr: () => void;
};
const Buttons = (props: ButtonProps) => {
    console.log("render button");
    return (
        <div>
            <button onClick={props.incr}>增加</button>
            <button onClick={props.decr}>减少</button>
        </div>
    );
};
