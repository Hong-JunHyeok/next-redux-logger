import { AnyAction, Store } from "redux";
import chalk from "chalk";
import * as treeify from "treeify";

const reduxLogger = (store: Store) => (next: any) => (action: AnyAction) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    console.log(
      chalk.bgBlue.black(" Action Handled "),
      chalk.bgGreen.black(` ${action.type} `)
    );
    console.log(chalk.green(treeify.asTree(action, true, false)));
  } else {
    console.log(treeify.asTree(action, true, false));
    console.log(
      `%c Action Handled : ${action.type}`,
      "background: #222; color: #bada55"
    );
  }

  next(action);
};

export default reduxLogger;
