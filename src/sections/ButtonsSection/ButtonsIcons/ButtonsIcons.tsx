import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/Buttons/Button/Button";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import SectionContainerRow from "../../../components/SectionContainer/SectionContainerRow/SectionContainerRow";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface IButtonsIcons {
  customClass?: string;
}

function ButtonsIcons({ customClass }: IButtonsIcons) {
  return (
    <SectionContainer
      title="Button filled"
      description="Bottoni based riempiti"
    >
      <SectionContainerRow title="Pre icon full">
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="primary"
        >
          Primary
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="secondary"
        >
          Secondary
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="success"
        >
          Success
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="warning"
        >
          Warning
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="error"
        >
          Error
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="info"
        >
          Info
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="light"
        >
          Light
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="dark"
        >
          Dark
        </Button>
      </SectionContainerRow>
      <SectionContainerRow title="Pre icon outline">
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="primaryOutline"
        >
          Primary
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="secondaryOutline"
        >
          Secondary
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="successOutline"
        >
          Success
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="warningOutline"
        >
          Warning
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="errorOutline"
        >
          Error
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="infoOutline"
        >
          Info
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="lightOutline"
        >
          Light
        </Button>
        <Button
          type="button"
          preIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="darkOutline"
        >
          Dark
        </Button>
      </SectionContainerRow>

      <SectionContainerRow title="Post icon full">
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="primary"
        >
          Primary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="secondary"
        >
          Secondary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="success"
        >
          Success
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="warning"
        >
          Warning
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="error"
        >
          Error
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="info"
        >
          Info
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="light"
        >
          Light
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="dark"
        >
          Dark
        </Button>
      </SectionContainerRow>
      <SectionContainerRow title="Post icon outline">
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="primaryOutline"
        >
          Primary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="secondaryOutline"
        >
          Secondary
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="successOutline"
        >
          Success
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="warningOutline"
        >
          Warning
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="errorOutline"
        >
          Error
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="infoOutline"
        >
          Info
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="lightOutline"
        >
          Light
        </Button>
        <Button
          type="button"
          postIcon={<FontAwesomeIcon icon={faHeart} />}
          projectType="darkOutline"
        >
          Dark
        </Button>
      </SectionContainerRow>
    </SectionContainer>
  );
}

export default ButtonsIcons;
