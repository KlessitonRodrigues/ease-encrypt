import { Container } from "./styled";
import { PropsWithChildren } from "react";

const PageContainer = (props: PropsWithChildren) => (
  <Container>{props.children}</Container>
);

export default PageContainer;
