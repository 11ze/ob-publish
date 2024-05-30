import { QuartzComponentConstructor } from "../types"

function Content() {
  return <script src="https://giscus.app/client.js"
    data-repo="11ze/notes"
    data-repo-id="R_kgDOJhaxtw"
    data-category="General"
    data-category-id="DIC_kwDOJhaxt84CWa3R"
    data-mapping="title"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="light"
    data-lang="zh-CN"
    crossorigin="anonymous"
    async>
  </script>
}

export default (() => Content) satisfies QuartzComponentConstructor
