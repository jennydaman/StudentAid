import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Outdoors } from "../assets/svg/outdoors.svg";
import { ReactComponent as Close } from "../assets/svg/close.svg";
import { ReactComponent as Smile } from "../assets/svg/smile.svg";
import { ReactComponent as Fine } from "../assets/svg/fine.svg";
import Grid from "../components/Grid";

const defaultSurvivalBox = {
  header: "WELCOME TO THE COVID-19 STUDENT SURVIVAL GUIDE",
  body:
    "This website is maintained by students for students whose lives, studies, and jobs have been affected by the 2020 COVID-19 outbreak. All students are welcome to use the regional or even university-specific resources on this website, even if they don’t attend the school associated with a specific resource."
};

export const Help = () => {
  const [region, setRegion] = useState("");
  const [survivalBoxIsOpen, setSurvivalBoxIsOpen] = useState(true);

  return (
    <ContentWrapper>
      <SurvivalBox
        region={region}
        survivalBoxIsOpen={survivalBoxIsOpen}
        setSurvivalBoxIsOpen={setSurvivalBoxIsOpen}
      />
      <RegionBox region={region} survivalBoxIsOpen={survivalBoxIsOpen} />
    </ContentWrapper>
  );
};

const SurvivalBox = ({ region, survivalBoxIsOpen, setSurvivalBoxIsOpen }) => {
  return (
    <SurvivalBoxWrapper className={!survivalBoxIsOpen ? "hidden" : ""}>
      <Outdoors
        style={{ position: "absolute", top: -99 / 2, right: -99 / 2 }}
      />
      <Smile
        style={{ position: "absolute", bottom: -54 / 2, right: -54 / 2 }}
      />
      <CloseButton onClick={() => setSurvivalBoxIsOpen(false)} />
      <SurvivalBoxHeader>
        {!region && defaultSurvivalBox.header}
      </SurvivalBoxHeader>
      <SurvivalBoxContent>
        {!region && defaultSurvivalBox.body}
      </SurvivalBoxContent>
    </SurvivalBoxWrapper>
  );
};

const RegionBox = ({ region, survivalBoxIsOpen }) => {
  return (
    <RegionBoxWrapper survivalBoxIsOpen={survivalBoxIsOpen}>
      <RegionBoxContentWrapper survivalBoxIsOpen={survivalBoxIsOpen}>
        <Fine style={{ position: "absolute", bottom: -83 / 2, left: 0 }} />
        <RegionBoxContent>
          <RegionBoxHeader>
            CLICK ON A REGION TO SEE LOCAL RESOURCES
          </RegionBoxHeader>
          <RegionBoxSubHeader>
            More resources are coming soon.
          </RegionBoxSubHeader>
          <Grid cols={2} style={{ marginTop: 32 }}>
            {Array(3)
              .fill(null)
              .map(() => (
                <RegionCard />
              ))}
          </Grid>
        </RegionBoxContent>
      </RegionBoxContentWrapper>
    </RegionBoxWrapper>
  );
};

const RegionCard = () => <RegionCardWrapper>Stuff</RegionCardWrapper>;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
`;
const SurvivalBoxWrapper = styled.div`
  position: relative;
  margin-top: 32px;
  background-color: #e5a698;
  max-width: 70%;
  z-index: 2;
  padding: 24px;
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
`;
const CloseButton = styled(Close)`
  position: absolute;
  top: 12px;
  left: 12px;
`;
const SurvivalBoxHeader = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  max-width: 80%;
  margin-top: 16px;
`;
const SurvivalBoxContent = styled.div`
  position: relative;
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
`;
const RegionBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ survivalBoxIsOpen }) =>
    survivalBoxIsOpen ? "-32px" : "0px"};
`;
const RegionBoxContentWrapper = styled.div`
  position: relative;
  background-color: #f8fff6;
  width: ${({ survivalBoxIsOpen }) => (survivalBoxIsOpen ? "95%" : "100%")};
  border: 1px solid #000000;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  box-sizing: border-box;
  padding: 16px;
  padding-top: ${({ survivalBoxIsOpen }) =>
    survivalBoxIsOpen ? "64px" : "16px"};
  padding-bottom: 32px;
`;
const RegionBoxContent = styled.div`
  border-left: 2px solid #000000;
  border-style: dotted;
  padding-left: 12px;
`;
const RegionBoxHeader = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
`;
const RegionBoxSubHeader = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;

const RegionCardWrapper = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
  border-radius: 4px;
  width: 132px;
  height: 168px;
  flex-basis: 100%;
  flex: 1;
`;

export default Help;
