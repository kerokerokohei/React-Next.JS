import { useState } from "react";
import {
  StackDivider,
  VStack,
  HStack,
  Button,
  Text,
  useToast,
  Input,
} from "@chakra-ui/react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        title: "タスクを入力してください",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <HStack>
        <form onSubmit={addTodo}>
          <Input
            size="lg"
            placeholder="タスク名"
            variant="flushed"
            value={enteredTodo}
            onChange={(e) => setEnteredTodo(e.target.value)}
          />
          <Button>追加</Button>
        </form>
      </HStack>
    </div>
  );
};

export default Form;
