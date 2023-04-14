import parse from 'html-react-parser'

const Html = ({ children }: { children: string }) => <>{parse(children)}</>

export default Html
