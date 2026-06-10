type Post = {
    id: number;          // id
    title: string;       // タイトル
    body: string;        // 本文
    published: boolean;  // 公開済みかどうか
};


// 編集中の投稿データを表す型
type EditingPost = Partial<Post>;

// 一覧表示用の投稿データを表す型
type SummaryPost = Pick<Post, 'id' | 'title'>;

// 公開済みの投稿データを表す型
type PublishedPost = Readonly<Post>;