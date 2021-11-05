import {
  Card,
  Icon,
  CardTitle,
  Container,
  Col,
  Row,
  Collection,
  CollectionItem,
} from "react-materialize";
import avatar from "./avatar.jpg";

const skills = {
  languages: ["JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  frameworks: ['Express', 'React', 'Koa'],
  databases: ['MongoDB', 'MySQL', 'MSSQL', 'Sqlite']
 };

export const About = () => {
  return (
    <div
      // actions={[
      //   <a key="1" href="#">
      //     This is a link
      //   </a>,
      // ]}
      closeIcon={<Icon>close</Icon>}
      // header={<CardTitle image={avatar} />}
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
      <Row>
        <Col s={12}>
          <h3>Ilya Spivakov</h3>
          <p>
            <strong>Full stack web developer</strong>
          </p>
          <p>
            Broad industry experience with various technologies - from embedded
            microcontrollers to server clusters.{" "}
          </p>
        </Col>


        <Col s={12} xl={6}>
          <Card horizontal title="Languages">
            <Collection>
              {skills.languages.map(q=><CollectionItem>{q}</CollectionItem>)}
            </Collection>
          </Card>
        </Col>

        <Col s={12} xl={6}>
          <Card horizontal title="Frameworks">
            <Collection>
              {skills.frameworks.map(q=><CollectionItem>{q}</CollectionItem>)}
            </Collection>
          </Card>
        </Col>

        <Col s={12} xl={6}>
          <Card horizontal title="Databases">
            <Collection>
              {skills.databases.map(q=><CollectionItem>{q}</CollectionItem>)}
            </Collection>
          </Card>
        </Col>

        <Col s={12} xl={6} className="hide">
          <Collection header="Languages">
            <CollectionItem>JavaScript</CollectionItem>
            <CollectionItem>TypeScript</CollectionItem>
            <CollectionItem>SQL</CollectionItem>
            <CollectionItem>HTML/CSS</CollectionItem>
          </Collection>
        </Col>
        <Col s={12} xl={6} className="hide">
          <Collection header="Frameworks">
            <CollectionItem>Node</CollectionItem>
            <CollectionItem>Express</CollectionItem>
            <CollectionItem>React</CollectionItem>
            <CollectionItem>Koa</CollectionItem>
          </Collection>
        </Col>
      </Row>
    </div>
  );
};
