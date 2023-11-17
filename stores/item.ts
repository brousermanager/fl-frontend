// use setup
export const useItemStore = defineStore("item", () => {
    const data = ref([
        "https://static.miraheze.org/nonciclopediawiki/f/fb/Porco_Dio.JPG",
    ]) as Ref<any[]>;
    const loading = ref(false) as Ref<boolean>;
    const error = ref(null) as Ref<string | null>;

    const changeData = () => {
        data.value = [
            "https://static.miraheze.org/nonciclopediawiki/0/07/Il-maiale.jpg",
        ];
    };

    return {
        data,
        loading,
        error,
        changeData,
    };
});
