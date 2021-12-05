//なぜインポートしているのかわからない。
// import "./styles.css";

//クリックした時の関数を作成。
const onClickAdd = () => {
    // 追加ボタンを押した時に入力されているtextを取得して変数に入れる。
    const inputText = document.getElementById("add-text").value;

    //追加ボタンを押した時に、入力された値は削除する。
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);

};

//未完了リストから指定の要素（タスク）を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createIncompleteList = (text) => {
    /**
     * タグの生成
     */
    // divタグを生成してclassを付与する。
    const div = document.createElement("div");
    div.className = "list-row";

    // liタグを生成して中身に追加で入力したtextを入れる。
    const li = document.createElement("li");
    li.innerText = text;

    /**
     * 完了ボタンイベント
     */
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    //完了ボタンをクリックした際
    completeButton.addEventListener("click", () => {
        //タスクを未完了から削除
        deleteFromIncompleteList(completeButton.parentNode);

        //完了知るとに追加する要素を作成
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;  //タスクのみを取得

        //div以下を初期化
        addTarget.textContent = null;

        //liタグの生成
        const li = document.createElement("li");
        li.innerText = text;

        /**
         * 戻すボタン
         */
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget)

            //textを取得
            const text = backButton.parentNode.firstElementChild.innerText; //タスクのテキストを取得
            createIncompleteList(text);
        });
        //divタグの子要素に書く要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        //完了リストに追加する
        document.getElementById("complete-list").appendChild(addTarget);
    })

    /**
     * 削除ボタンイベント
     */
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    deleteButton.addEventListener("click", () => {
        deleteFromIncompleteList(deleteButton.parentNode);
    })

    /**
     * 戻すボタン
     */

    /**
     * タグの追加
     */
    // divタグ(タスク)の子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了リストに追加 作成したdivタグをincomplete-listの子タグとして追加
    document.getElementById("incomplete-list").appendChild(div)
}

//クリックした時にonClickAddを起動する。
document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());