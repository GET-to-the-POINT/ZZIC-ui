<!--	<style>-->
<!--      :root {-->
<!--          &#45;&#45;primary-color: #003399;-->
<!--          &#45;&#45;secondary-color: #0055cc;-->
<!--          &#45;&#45;background-color: #e6f2ff;-->
<!--          &#45;&#45;text-color: #001a4d;-->
<!--          &#45;&#45;accent-color: #ffcc00;-->
<!--      }-->
<!--      body {-->
<!--          font-family: 'Arial', sans-serif;-->
<!--          background-color: var(&#45;&#45;background-color);-->
<!--          color: var(&#45;&#45;text-color);-->
<!--          display: flex;-->
<!--          justify-content: center;-->
<!--          align-items: center;-->
<!--          min-height: 100vh;-->
<!--          margin: 0;-->
<!--          padding: 20px;-->
<!--          box-sizing: border-box;-->
<!--      }-->
<!--      .container {-->
<!--          background-color: white;-->
<!--          padding: 40px;-->
<!--          border-radius: 15px;-->
<!--          box-shadow: 0 10px 30px rgba(0,0,0,0.1);-->
<!--          width: 100%;-->
<!--          max-width: 400px;-->
<!--          position: relative;-->
<!--          overflow: hidden;-->
<!--      }-->
<!--      .container::before {-->
<!--          content: '';-->
<!--          position: absolute;-->
<!--          top: 0;-->
<!--          left: 20px;-->
<!--          right: 20px;-->
<!--          height: 20px;-->
<!--          background-image: repeating-linear-gradient(-->
<!--                  90deg,-->
<!--                  var(&#45;&#45;accent-color),-->
<!--                  var(&#45;&#45;accent-color) 10px,-->
<!--                  transparent 10px,-->
<!--                  transparent 20px-->
<!--          );-->
<!--      }-->
<!--      h1 {-->
<!--          color: var(&#45;&#45;primary-color);-->
<!--          text-align: center;-->
<!--          margin-bottom: 20px;-->
<!--          font-size: 28px;-->
<!--          margin-top: 10px;-->
<!--      }-->
<!--      .todo-detail {-->
<!--          background-color: var(&#45;&#45;background-color);-->
<!--          border-radius: 10px;-->
<!--          padding: 20px;-->
<!--          margin-bottom: 30px;-->
<!--      }-->
<!--      .todo-detail label {-->
<!--          display: block;-->
<!--          margin-bottom: 10px;-->
<!--          font-weight: bold;-->
<!--          color: var(&#45;&#45;secondary-color);-->
<!--          width: calc(100% - 30px);-->
<!--      }-->
<!--      .todo-detail input[type="text"] {-->
<!--          display: block;-->
<!--					width: 100%;-->
<!--          padding: 10px;-->
<!--          border: 1px solid var(&#45;&#45;secondary-color);-->
<!--          border-radius: 5px;-->
<!--          font-size: 14px;-->
<!--          margin-top: 5px;-->
<!--      }-->
<!--      .actions {-->
<!--          display: grid;-->
<!--          gap: 10px;-->
<!--          margin-top: 30px;-->
<!--      }-->
<!--      .btn {-->
<!--          padding: 10px 15px;-->
<!--          border: none;-->
<!--          border-radius: 50px;-->
<!--          font-size: 14px;-->
<!--          cursor: pointer;-->
<!--          transition: all 0.3s ease;-->
<!--          text-decoration: none;-->
<!--          text-align: center;-->
<!--          display: flex;-->
<!--          align-items: center;-->
<!--          justify-content: center;-->
<!--          gap: 5px;-->
<!--          box-shadow: 0 2px 5px rgba(0,0,0,0.1);-->
<!--      }-->
<!--      .btn-primary {-->
<!--          background-color: var(&#45;&#45;primary-color);-->
<!--          color: white;-->
<!--      }-->
<!--      .btn-primary:hover {-->
<!--          background-color: var(&#45;&#45;secondary-color);-->
<!--          transform: translateY(-2px);-->
<!--          box-shadow: 0 4px 8px rgba(0,0,0,0.2);-->
<!--      }-->
<!--      .btn-secondary {-->
<!--          background-color: var(&#45;&#45;accent-color);-->
<!--          color: var(&#45;&#45;text-color);-->
<!--      }-->
<!--      .btn-secondary:hover {-->
<!--          background-color: var(&#45;&#45;secondary-color);-->
<!--          color: white;-->
<!--          transform: translateY(-2px);-->
<!--          box-shadow: 0 4px 8px rgba(0,0,0,0.2);-->
<!--      }-->
<!--      .btn-full-width {-->
<!--          grid-column: 1 / -1;-->
<!--      }-->
<!--	</style>-->
<!--<div class="container">-->
<!--	<header>-->
<!--		<h1>ZZIC</h1>-->
<!--	</header>-->
<!--	<form class="todo-detail" th:action="@{/todos/update/{id}(id=${todo.id})}" method="post">-->
<!--		<input type="hidden" name="id" th:value="${todo.id}" />-->
<!--		<input type="hidden" name="referer" th:value="${referer}">-->

<!--		<label>-->
<!--			제목-->
<!--			<input type="text" name="title" th:value="${todo.title}" />-->
<!--		</label>-->

<!--		<label>-->
<!--			설명-->
<!--			<input type="text" name="description" th:value="${todo.description}" />-->
<!--		</label>-->

<!--		<div class="actions">-->
<!--			<button type="submit" class="btn btn-primary btn-full-width">-->
<!--				<i data-lucide="save"></i>-->
<!--				수정 완료-->
<!--			</button>-->
<!--			<a th:href="@{/todos}" class="btn btn-secondary btn-full-width">-->
<!--				<i data-lucide="list"></i>-->
<!--				목록으로 돌아가기-->
<!--			</a>-->
<!--		</div>-->
<!--	</form>-->
<!--</div>-->

