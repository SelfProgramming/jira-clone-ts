import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type AppDialogState = Readonly<
  [
    {
      isOpen: boolean;
      title: any;
      content: ReactNode;
      actions: ReactNode;
    },
    {
      showDialog(options: { title?: any; content?: any; actions?: any }): void;
      closeDialog(): void;
    },
  ]
>;

export const AppDialogContext = createContext<AppDialogState>(
  {} as AppDialogState,
);

export const AppDialogProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<any>('');
  const [title, setTitle] = useState('');
  const [actions, setActions] = useState<any>('');

  const reset = useCallback(() => {
    setIsOpen(false);
    setContent('');
    setActions('');
    setTitle('');
  }, []);

  const dialogApi = useMemo(
    () => ({
      showDialog(options: { title: string; content: any; actions: any }) {
        reset();
        setIsOpen(true);
        setContent(options.content);
        setActions(options.actions);
        setTitle(options.title);
      },
      closeDialog() {
        reset();
      },
    }),
    [reset],
  );

  const dialogState = {
    isOpen,
    title,
    content,
    actions,
  };

  return (
    <AppDialogContext.Provider value={[dialogState, dialogApi] as const}>
      {children}
    </AppDialogContext.Provider>
  );
};

export const useDialogState = () => {
  return useContext(AppDialogContext);
};
