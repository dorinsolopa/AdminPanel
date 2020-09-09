import React from "react";
import Header from "../../components/typography/Header";
import { header, textColor } from "../../info/Info";
import Card from "../../components/chart/Card";
import TextColor from "../../components/typography/TextColor";
class Typography extends React.Component {
  render() {
    return (
      <Card>
        <div className="col-12">
          <Header header={header} />
        </div>
        <div>
          <TextColor textColor={textColor} />
        </div>
      </Card>
    );
  }
}
export default Typography;
