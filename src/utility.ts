// タスクの基本構造を表す型
type Task = {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
};

// 編集中のタスクを表す型（どの項目も未入力でOKにする）
type EditingTask = Partial<Task>;

// 一覧表示用のタスクを表す型（必要な情報だけを抽出する）
type SummaryTask = Pick<Task, 'id' | 'title'>;

// 完了済みのタスクを表す型（内容を変更不可にする）
type CompletedTask = Readonly<Task>;

const editingTask: EditingTask = {
    title: '『TypeScriptの基礎を学ぼう』の学習',
};

const summaryTask: SummaryTask = {
    id: 1,
    title: 'ToDoアプリの開発',
};

const completedTask: CompletedTask = {
    id: 2,
    title: '『JavaScriptの基礎を学ぼう』の学習',
    completed: true,
};

editingTask.completed = false;
summaryTask.title = 'ポートフォリオの作成';
// completedTask.title = '『Reactの基礎を学ぼう』の学習';

console.log('---- 編集中のタスク ----');
console.log(editingTask);
console.log('---- 一覧表示用中のタスク ----');
console.log(summaryTask);
console.log('---- 完了済みのタスク ----');
console.log(completedTask);