## Infos Gerais

- prop flex -> define como um item será posicionado no espaço disponível dentro do container


- criando interface para a criação de tasks, ao qual sempre serão compostas por um id, um texto e se já foi aplicado check ou não.

    > 
        export interface ITask {
            id: number,
            text: string,
            isChecked: boolean
        }


- Criando a const newTask, que será chamada no momento da atualização da task através do state, é realizado a 'criação' do elemento através dos seguintes valores como se fosse um padrão de inicialização:

    >
        const newTask: ITask = {
        id: new Date().getTime(),
        text: inputValue,
        isChecked: false
        }


- Atualizando campo de task, através do state e através do uso de spread operator, é carregados todas as 'tasks' antigas e no final do array é adicionado o novo elemento (newTask), na sequência é aplicado um setInputValue(''), para 'resetar' o campo

    >
        setTasks((state) => [...state, newTask])
        setInputValue('')

- Aplicação do Reduce para retornar o valor total de Tasks que receberam Checked

    > 
        const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {

            if (currentTask.isChecked) {
            return prevValue + 1;
            }

            return prevValue;
        }, 0)

        - Invocamos a função a partir do próprio elemento tasks e passamos para o mesmo a função de callback, recebendo assim o valor anterior(prevValue) e um objeto(currentTask), que irá representar cada valor do elemento em cada iteração. No interior dessa função de callback, é efetuado a verificação se o currentTask está 'checkado' e retornamos o resultado que, nesse caso, é a soma do prevValue com + 1. Por fim, passamos ainda o primeiro valor do contator de tasks que foram 'checadas', que inicia com zero (último parâmetro).