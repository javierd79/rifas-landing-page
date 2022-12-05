import { createStyles, Paper, Text, Title, Button } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    height: 540,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing.xl
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}))

interface ArticleCardImageProps {
  image: string;
  title: string;
  category: string;
}

export function ArticleCards ({ image, title, category }: ArticleCardImageProps) {
  const { classes } = useStyles()

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Leer más
      </Button>
    </Paper>
  )
}
